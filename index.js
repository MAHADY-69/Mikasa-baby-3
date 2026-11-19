const http = require('http');
http.createServer((req,res)=>res.end('HI NA TA 🎀 RUNNING')).listen(process.env.PORT || 10000);

const { spawn } = require("child_process");
const log = require("./logger/log.js");
const { showLogo } = require("./mikasa-log.js");

showLogo();

function startProject() {
  const child = spawn("node", ["Goat.js"], {
    cwd: __dirname,
    stdio: "inherit"
  });

  child.on("close", (code) => {
    if (code == 2) {
      log.info("Restarting Project...");
      startProject();
    }
  });
}

startProject();
