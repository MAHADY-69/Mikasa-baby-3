module.exports = {
  config: {
    name: "mikasa",
    version: "24.0 STABLE",
    author: "MAHADY",
    countDown: 5,
    role: 0,
    shortDescription: "bby reply",
    longDescription: "bby reply with old text",
    category: "no prefix",
    guide: { en: "{p}mikasa" }
  },
  onStart: async function () {},
  onChat: async function ({ api, event }) {
    try {
      if (!event.body) return;
      const body = event.body.toLowerCase();
      if (!body.includes("bby")) return;

      const oldTexts = [
        "Bolo na valobasi 🥺❤️..!!",
        "Atokhon kharap chilam tumi aste valo hoye gechi 🥹❤️",
        "Tomar kotha vabtesi bby 🥺🫶",
        "Onek valobasi bby 😘❤️",
        "Ha jan Mikasa hazir 🥹❤️ bolo",
        "Bolo sona 🥹❤️ suntechi"
      ];
      const pick = oldTexts[Math.floor(Math.random() * oldTexts.length)];
      
      // Eita dilei pic er moto upore 🌸 Lingxiao 🌸 replied to you asbe
      return api.sendMessage(`『 GoLam Ma HA DY 』\n\n${pick}`, event.threadID, event.messageID);
    } catch (e) {
      console.log(e);
    }
  }
};
