const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: "ipc" });
const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('Hello World!')
})

server.listen(3000, () => {
    console.log('Server started on port 3000')
})

const activity = {
  details: "Mencoba untuk mendapatkanmu",
  state: "Mempermainkan hatimu",
  timestamps: {
    start: Date.now(),
  },

  assets: {
    large_image: "dreamland",
    large_text: "AFK😘",
    small_image: "dreamland",
    small_text: "AFK😘",
  },

  buttons: [
    {
      label: "Join Server",
      url: "https://discord.gg/Mp2sVmCcHt",
    },

    // {
    //     "label": "Join Server",
    //     "url": "https://discord.gg/Mp2sVmCcHt"
    // }
  ],

  instance: true,
};

client.on("ready", () => {
  client.request("SET_ACTIVITY", { pid: process.pid, activity: activity });
  console.log("Custom RPC is now visible!");
});

client.login({ clientId: "1097487719749406822" });
