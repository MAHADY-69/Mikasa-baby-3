const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "owner",
    version: "3.0",
    author: "MAHADY",
    countDown: 5,
    role: 0,
    category: "INFORMATION"
  },
  onStart: async function ({ message }) {
    const msg = `┏━━━━━━━━━━━━━━━━┓
┃ 🤖 BOT : 𝐆𝐎𝐋𝐀𝐌 𝐌𝐀 𝐇𝐀 𝐃𝐘
┃ 👑 Owner : 𝐌𝐀𝐇𝐀𝐃𝐘
┗━━━━━━━━━━━━━━━━┛
┏━━━━〔 🔗 CONTACT 〕━━━━┓
┃ 📘 FB: https://www.facebook.com/share/1A1tLFXQTp/
┃ 📱 WP: 01806179631
┗━━━━━━━━━━━━━━━━━━━━┛`;

    const imgPath = path.join(__dirname, "owner.jpg");
    
    if (fs.existsSync(imgPath)) {
      return message.reply({
        body: msg,
        attachment: fs.createReadStream(imgPath)
      });
    } else {
      return message.reply(msg);
    }
  }
};
