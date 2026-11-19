module.exports = {
  config: {
    name: "tagfun",
    version: "3.0",
    author: "GOLAM MAHADY",
    countDown: 3,
    role: 0,
    shortDescription: "boy / girl auto fun",
    category: "FUN",
    guide: "{pn} boy @tag | {pn} girl @tag | {pn} stop"
  },
  onStart: async function({ message, args, event }) {
    const mention = event.mentions;
    const targetID = Object.keys(mention)[0];
    const targetName = targetID ? mention[targetID].replace("@", "") : "jaan";
    const type = (args[0] || "").toLowerCase();

    if (type === "stop") {
      if (global.tagFunInterval) {
        clearInterval(global.tagFunInterval);
        global.tagFunInterval = null;
        return message.reply("🛑 Ok thamlam 🥺");
      }
      return message.reply("Ami to kichui kortesilam na 😅");
    }

    // CHELE - !tagfun boy @Rahim
    if (type === "boy") {
      const loves = [
        `👑 ${targetName} tumi group er king, no doubt!`,
        `🔥 ${targetName} er aura +9999, Naruto o fail!`,
        `💪 ${targetName} tumi thakle group jome jay!`,
        `⚔️ ${targetName} tumi Pain er moto powerful!`,
        `🦊 ${targetName} tumi Mikasa bby er best bro!`
      ];
      return sendSpam(message, targetName, loves);
    }

    // MEYE - !tagfun girl @Mim
    if (type === "girl") {
      const loves = [
        `🌸 ${targetName} tumi eto cute keno? Mikasa bby o jealous 🥹`,
        `👑 ${targetName} tomake dekhle heartbeat fast hoiya jay🫠!`,
        `✨ ${targetName} tomake dekhle bow bow lahe😩🫶`,
        `💖 ${targetName} তুমি বি এনপি 
আমি জামাত 
তুমি পোলাও 
আমি ভাত
আমি নাসিরুদ্দিন 
তুমি আব্বাস মির্জা 
আমি নির্লজ্জ 
তোমার ভীষণ লজ্জা 🤭
আমি আনারস 🍍
তুমি দুধ 🥛
আমি হালাল 😌
তুমি সুদ 😑
আমি সুর্য 🌞
তুমি চাঁদ 🌝
তুমি পারফিউম 
আমি পাদ 💨
তুমি BCB 
আমি ট্রফি 🏆
তুমি চা🫖
আমি কফি ☕
তুমি লাইট 💡
আমি মোম 🕯️
আমি বাজি 🧨
তুমি বোম 💣
আমি পুকুর 
তুমি পুল 
আমি ক্ষ্যাত 🥶
তুমি কুল 😎
তুমি রেস্টুরেন্ট 
আমি টং 
তুমি Always Right 😌
আমি wrong 😑
আমি তেল 
তুমি পানি 💦
আমি প্রজা 
তুমি রানী 👸
আমি ব্রেড 
তুমি নাইফ 🔪
এত অমিল থাকার পরেও 
তুমি হবা কি আমার wife!`,
        `🦋 ${targetName} tumi ekta pori, sotti bolchi!`
      ];
      return sendSpam(message, targetName, loves);
    }

    function sendSpam(message, name, loves) {
      if (global.tagFunInterval) clearInterval(global.tagFunInterval);
      let count = 0;
      message.reply(`Ok! ${name} ke 5 bar valobasha dicchi! Thamte chaile !tagfun stop likho 🥹`);
      global.tagFunInterval = setInterval(() => {
        count++;
        if (count > 5) {
          clearInterval(global.tagFunInterval);
          global.tagFunInterval = null;
          return message.reply(`Done! ${name} ke valobasha sesh ❤️`);
        }
        message.reply(loves[count - 1]);
      }, 2000);
    }

    return message.reply(`😎 Chele ke: !tagfun boy @tag\nMeye ke: !tagfun girl @tag\nThamte: !tagfun stop`);
  }
};
