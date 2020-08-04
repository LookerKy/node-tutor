const os = require("os");

const osObj = {
  arch: os.arch(),
  platform: os.platform(),
  type: os.type(),
  uptime: os.uptime(),
  hostname: os.hostname(),
  release: os.release(),
  homedir: os.homedir(),
  tmpdir: os.tmpdir(),
  cpu: os.cpus(),
  cpuLenth: os.cpus().length,
  freemem: os.freemem() / 1024 / 1024 / 1024,
  totalmem: os.totalmem() / 1024 / 1024 / 1024,
};

console.dir(osObj);
