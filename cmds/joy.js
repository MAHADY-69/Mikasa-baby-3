const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "joy",
    author: "Saim",
    category: "voice"
  },

  onChat: async function({ api, event }) {
    const msg = event.body?.toLowerCase();
    if (!msg) return;

    if (msg.includes("joy")) {
      return api.sendMessage({
        attachment: fs.createReadStream(
          path.join(__dirname, "Messenger_creation_4612158029022725_20261105_231419.mp3")
        )
      }, event.threadID, event.messageID);
    }
  },

  onStart: async function() {}
};
