const processObj = {
  version: process.version,
  architecher: process.arch,
  platform: process.platform,
  pid: process.pid,
  uptime: process.uptime(),
  execPath: process.execPath,
  cwd: process.cwd(),
  cpuUsage: process.cpuUsage(),
  env: process.env,
};

console.dir(processObj);

setImmediate(() => {
  console.log("immediate");
});
process.nextTick(() => {
  console.log("nextTik");
});
setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => console.log("promise"));
