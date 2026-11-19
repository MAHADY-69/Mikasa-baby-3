// HI NA TA 🎀 - Custom Logger
const colors = {
  pink: "\x1b[35m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  reset: "\x1b[0m"
};

function showLogo() {
  console.log(colors.pink + "==========================================" + colors.reset);
  console.log(colors.yellow + "  MA HA DY - FCA ⚡" + colors.reset);
  console.log(colors.cyan + "  forged by GoLam MA HA DY" + colors.reset);
  console.log(colors.pink + "  BOT: HI NA TA 🎀 is Online!" + colors.reset);
  console.log(colors.pink + "==========================================" + colors.reset);
}

module.exports = { showLogo };
