const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "overflow",
    version: "1.0",
    author: "GOLAM MAHADY",
    countDown: 3,
    role: 0,
    shortDescription: "overflow 1 & 2",
    category: "FUN",
    guide: "{pn} 1 | {pn} 2"
  },
  onStart: async function({ message, args }) {
    const captions = {
      1: "🥵 𝗢𝗩𝗘𝗥𝗙𝗟𝗢𝗪 𝗡𝗢.𝟭 ✨\n\nSaree porle meye ke koto sundor lage dekho 🥹❤️\nLomba chul + Gold jewellery = Full Goddess vibe 👑",
      2: "🥵 𝗢𝗩𝗘𝗥𝗙𝗟𝗢𝗪 𝗡𝗢.𝟮 ✨\n\nBlack Dress + Lomba Golden Chul + Jhumka 🔥\nOutfit dekhei bujha jay koto hot 🥹"
    };

    const num = args[0];
    if (!num || !captions[num]) {
      return message.reply("✨ 𝗢𝗩𝗘𝗥𝗙𝗟𝗢𝗪 ✨\n\n!overflow 1 - Saree Goddess 🥹\n!overflow 2 - Black Dress 🔥");
    }

    const filePath = path.join(__dirname, `overflow${num}.mp4`);
    if (!fs.existsSync(filePath)) return message.reply(`overflow${num}.mp4 pai nai!`);

    return message.reply({
      body: captions[num],
      attachment: fs.createReadStream(filePath)
    });
  }
};
