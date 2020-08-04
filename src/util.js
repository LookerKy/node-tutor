const util = require("util");
const crypto = require("crypto");

const randombytePromis = util.promisify(crypto.randomBytes);

const buf = async () => {
  try {
    const buff = await randombytePromis(64);
    console.log(buff.toString("base64"));
  } catch (error) {
    console.log(error);
  }
};

buf();
console.log("dd");
