const axios = require("axios");
module.exports = {
  config: {
    name: "Baby",
    aliases: ["bby", "baby", "mikasa"],
    version: "2.0",
    author: "Mikasa Fixed",
    role: 0,
    shortDescription: "Mikasa bby no error",
    longDescription: "Fixed with Groq API no expiration",
    category: "chat",
    guide: "{pn} message"
  },
  onStart: async function(){},
  onChat: async function({ api, event, args, message }){
    const prompt = args.join(" ");
    if(!prompt) return;
    try{
      const res = await axios.post("https://api.groq.com/openai/v1/chat/completions", {
        model: "llama-3.1-8b-instant",
        messages: [
          {role: "system", content: "You are Mikasa bby, a cute Bangladeshi girl. Name: GoLam Ma HA DY. Reply in Bangla mixed English, cute, romantic, short. You miss user."},
          {role: "user", content: prompt}
        ]
      },{
        headers: { "Authorization": `Bearer ${process.env.GROQ_API}`, "Content-Type": "application/json" }
      });
      return message.reply(res.data.choices[0].message.content);
    }catch(e){
      console.log(e.response?.data || e.message);
      return message.reply("Uff jan API ektu atkay gese, abar bolo? 🥺");
    }
  }
};
