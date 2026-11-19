module.exports = {
  config: {
    name: "autoReact",
    version: "1.0.0",
    author: "Hinata",
    category: "events"
  },

  onStart: async ({ api, event }) => {
    // Sudhu tor msg e react dibe, onno karo tay dibe na
    // Niche tor UID ta bosabi
    const MY_UID = "61582294185515"; // <-- Ekhane tor Facebook UID ta bosabi

    if (event.senderID != MY_UID) return;
    if (!event.messageID) return;

    try {
      await api.setMessageReaction("😽", event.messageID, (err) => {}, true);
    } catch (e) {
      console.log("React Error:", e);
    }
  }
};
