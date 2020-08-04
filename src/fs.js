const fs = require("fs");
const util = require("util");

fs.readFile("readme1.txt", (err, data) => {
  if (err) throw err;

  console.log(data);
  console.log(data.toString());
});

fs.writeFile("./src/write.txt", "this is writing test with fs module", (err) => {
  if (err) throw err;

  fs.readFile("./write.txt", (err, data) => {
    if (err) throw err;

    console.log(data.toString());
  });
});

/** 순서가 보장되지 않는 비동기-논블로킹 방식 */
fs.readFile("readme2.txt", (err, data) => {
  if (err) throw err;
  console.log(`1.${data.toString()}`);
});

fs.readFile("readme2.txt", (err, data) => {
  if (err) throw err;
  console.log(`2.${data.toString()}`);
});

fs.readFile("readme2.txt", (err, data) => {
  if (err) throw err;
  console.log(`3.${data.toString()}`);
});

/** 순서가 보장되는 동기-블로킹 방식 */
let data = fs.readFileSync("readme2.txt");
console.log(`1.${data.toString()}`);
data = fs.readFileSync("readme2.txt");
console.log(`2.${data.toString()}`);
data = fs.readFileSync("readme2.txt");
console.log(`3.${data.toString()}`);

/** 순서가 보장되는 비동기-논블로킹 방식 */
fs.readFile("readme2.txt", (err, data) => {
  if (err) throw err;
  console.log(`1.${data.toString()}`);

  fs.readFile("readme2.txt", (err, data) => {
    if (err) throw err;
    console.log(`2.${data.toString()}`);

    fs.readFile("readme2.txt", (err, data) => {
      if (err) throw err;
      console.log(`3.${data.toString()}`);
    });
  });
});

/** promise 로 변경된 코드 */
const readFiletoPromise = util.promisify(fs.readFile);
const readFilePromise = async () => {
  try {
    let data = await readFiletoPromise("readme2.txt");
    console.log(`promise1 : ${data.toString()}`);
    data = await readFiletoPromise("readme2.txt");
    console.log(`promise2 : ${data.toString()}`);
    data = await readFiletoPromise("readme2.txt");
    console.log(`promise3 : ${data.toString()}`);
  } catch (error) {
    console.log(error);
  }
};

readFilePromise();
