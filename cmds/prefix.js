const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "prefix",
    version: "5.2",
    author: "GOLAM MAHADY",
    countDown: 3,
    role: 0,
    shortDescription: "Mikasa bby prefix",
    longDescription: "Pain vs Naruto - Mikasa bby",
    category: "CONFIG"
  },
  onStart: async function({ message }) {
    const prefix = global.GoatBot?.config?.prefix || "!";

    const info = `┏━━━━━━━[ Mikasa bby ]━━━━━━━┓
┃
┃ 👑 AUTHOR : GOLAM MAHADY
┃ 🤖 BOT : Mikasa bby
┃ 🔗 PREFIX : ${prefix}
┃ ⚔️ BATTLE : PAIN VS NARUTO
┃ 🔥 AURA : +9999 TRUE RESOLVE
┃ 💥 DIALOGUE : BRING IT ON, OTSUTSUKI
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━┛
YOU WANT TO SEE WHAT TRUE RESOLVE IS?
I'LL SHOW YOU!`;

    // cmds folder er vitor je kono mp4 khujbe, naam ja-i hok
    const files = fs.readdirSync(__dirname);
    const videoFile = files.find(f => f.endsWith(".mp4"));
    const videoPath = videoFile ? path.join(__dirname, videoFile) : null;

    if (videoPath) {
      return message.reply({
        body: info,
        attachment: fs.createReadStream(videoPath)
      });
    } else {
      return message.reply(info + "\n\n⚠️ video upload hoy nai!");
    }
  }
};
