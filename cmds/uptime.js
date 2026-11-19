module.exports = {
  config: {
    name: "up",
    version: "3.0.0",
    author: "GoLam MA HA DY",
    category: "info"
  },

  onStart: async ({ api, event, usersData, threadsData }) => {
    const os = require("os");
    const fs = require("fs-extra");
    const path = require("path");

    const uptime = process.uptime();
    const h = Math.floor(uptime / 3600);
    const m = Math.floor((uptime % 3600) / 60);
    const s = Math.floor(uptime % 60);
    const start = Date.now();

    const allUsers = await usersData.getAll();
    const allThreads = await threadsData.getAll();

    const msg = 
`💜┌───〔 𝗦𝗬𝗦𝗧𝗘𝗠 𝗦𝗧𝗔𝗧𝗨𝗦 〕───┐🌧️

🕒 𝗨𝗣𝗧𝗜𝗠𝗘: ${h}H ${m}M ${s}s
🚀 𝗣𝗜𝗡𝗚: ${Date.now() - start}ms
🧠 𝗥𝗔𝗠: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
📊 𝗖𝗣𝗨 𝗟𝗢𝗔𝗗: ${os.loadavg()[0].toFixed(2)}%
🌐 𝗣𝗟𝗔𝗧𝗙𝗢𝗥𝗠: ${os.platform()}
📦 𝗡𝗢𝗗𝗘: ${process.version}

━━━━━━━━━━━━━━
👥 𝗧𝗢𝗧𝗔𝗟 𝗨𝗦𝗘𝗥𝗦: ${allUsers.length}
💬 𝗧𝗢𝗧𝗔𝗟 𝗚𝗥𝗢𝗨𝗣𝗦: ${allThreads.length}
━━━━━━━━━━━━━━

👤 𝗢𝘄𝗻𝗲𝗿: GoLam MA HA DY
🔗 𝗖𝗼𝗻𝘁𝗮𝗰𝘁: https://www.facebook.com/share/1HXpijAy7p/`;

    const imgPath = path.join(__dirname, "hinata_rain.jpg");
    return api.sendMessage({
      body: msg,
      attachment: fs.existsSync(imgPath) ? fs.createReadStream(imgPath) : null
    }, event.threadID);
  }
};
