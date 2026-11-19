const axios = require("axios");
const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "pair",
    aliases: ["pair8", "pairing"],
    author: "Ew'r Saim X Ariyan",
    category: "love",
  },

  onStart: async function ({ api, event, usersData }) {
    try {
      const senderData = await usersData.get(event.senderID);
      const senderName = senderData.name;

      // Thread info safe vabe nao
      const threadData = await api.getThreadInfo(event.threadID);
      let users = threadData.userInfo || threadData.participantIDs || [];

      // Jodi userInfo na thake, tahole alada vabe userInfo ano
      if (!threadData.userInfo) {
        try {
          const info = await api.getUserInfo(threadData.participantIDs);
          users = Object.values(info).map(u => ({
            id: u.id || u.userID,
            name: u.name,
            gender: u.gender
          }));
          // id fix
          users = threadData.participantIDs.map(id => {
            const u = info[id];
            return { id, name: u?.name || "Unknown", gender: u?.gender };
          });
        } catch (e) {}
      }

      if (!users || users.length === 0) {
        return api.sendMessage("⚠️ Group er member der info pawa jacche na.", event.threadID, event.messageID);
      }

      // Gender na thakleo jate kaj kore - random pair
      let matchCandidates = users.filter(user => user.id !== event.senderID);
      
      // Jodi gender thake tahole opposite gender khujo, na thakle sobai candidate
      const myData = users.find((user) => String(user.id) === String(event.senderID));
      const myGender = myData?.gender ? myData.gender.toUpperCase() : null;

      if (myGender === "MALE") {
        const females = users.filter(u => u.gender === "FEMALE" && String(u.id) !== String(event.senderID));
        if (females.length > 0) matchCandidates = females;
      } else if (myGender === "FEMALE") {
        const males = users.filter(u => u.gender === "MALE" && String(u.id) !== String(event.senderID));
        if (males.length > 0) matchCandidates = males;
      }

      if (matchCandidates.length === 0) {
        return api.sendMessage("❌ No suitable match found in the group.", event.threadID, event.messageID);
      }

      const selectedMatch = matchCandidates[Math.floor(Math.random() * matchCandidates.length)];
      const matchName = selectedMatch.name || "Unknown";

      const width = 800;
      const height = 400;
      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext("2d");

      const background = await loadImage("https://i.postimg.cc/pdv5dFVX/611905695-855684437229208-8377464727643815456-n.png");
      ctx.drawImage(background, 0, 0, width, height);

      const sIdImage = await loadImage(`https://graph.facebook.com/${event.senderID}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
      const pairPersonImage = await loadImage(`https://graph.facebook.com/${selectedMatch.id}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);

      function drawCircle(ctx, img, x, y, size) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(img, x, y, size, size);
        ctx.restore();
      }

      drawCircle(ctx, sIdImage, 385, 40, 170);
      drawCircle(ctx, pairPersonImage, width - 213, 190, 170);

      const outputPath = path.join(__dirname, `pair_${Date.now()}.png`);
      const out = fs.createWriteStream(outputPath);
      const stream = canvas.createPNGStream();
      stream.pipe(out);

      out.on("finish", () => {
        const lovePercent = Math.floor(Math.random() * 31) + 70;
        const message = `🥰𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗽𝗮𝗶𝗿𝗶𝗻𝗴 ・${senderName} 🎀 ・${matchName} 🎀 💌 𝗪𝗶𝘀𝗵 𝘆𝗼𝘂 𝘁𝘄𝗼 𝗵𝘂𝗻𝗱𝗿𝗲𝗱 𝘆𝗲𝗮𝗿𝘀 𝗼𝗳 𝗵𝗮𝗽𝗽𝗶𝗻𝗲𝘀𝘀 ❤️❤️ 𝗟𝗼𝘃𝗲 𝗣𝗲𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲: ${lovePercent}% 💙`;
        api.sendMessage(
          { body: message, attachment: fs.createReadStream(outputPath) },
          event.threadID,
          () => {
            if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
          },
          event.messageID
        );
      });

    } catch (error) {
      console.log("PAIR ERROR:", error);
      api.sendMessage("❌ An error occurred while trying to find a match.\n" + error.message, event.threadID, event.messageID);
    }
  },
};
