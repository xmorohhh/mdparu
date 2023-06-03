const { command ,isPrivate} = require("../lib/");
command(
  {
    pattern: "git",
    fromMe: isPrivate,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage("```*MY SCRIPT* : *https://github.com/Sparkymon777/Aswin-MD*```");
    const end = new Date().getTime();
    );
  }
);
