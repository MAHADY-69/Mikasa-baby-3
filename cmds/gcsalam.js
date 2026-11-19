module.exports = {
  config: {
    name: "gcsalam",
    version: "1.0",
    author: "GoLam MA HA DY",
    role: 0,
    category: "no prefix"
  },
  onStart: async function(){},
  onChat: async function({ api, event }) {
    if (!event.body) return;
    const msg = event.body.trim();

    // Tor UID bosano ache
    const MY_UID = "61582294185515"; 
    const GF_UID = "GF_ER_UID_PORE_BOSABI"; // GF er ta paile ekhane bosabi

    // Khali tui hoilei kaj korbo ekhon
    if (event.senderID != MY_UID && event.senderID != GF_UID) return;

    try {
      const info = await api.getThreadInfo(event.threadID);
      const gcEmoji = info.emoji || "🤨";

      // GC er emoji ba 🤨 dilei Salam dibo
      if (msg === gcEmoji || msg === "🤨") {
        const salam = `— ᴀꜱꜱᴀʟᴀᴍᴜᴀʟᴀɪᴋᴜᴍ"!🤍🌷 ʷᵃ ʳᵃʰᵐᵃᵗᵘˡˡᵃʰⁱ ʷᵃ ᴮᵃʳᵏᵃᵗᵘ ßøss..¡!🫡🫶💗`;
        return api.sendMessage(salam, event.threadID, event.messageID);
      }
    } catch(e){}
  }
};
