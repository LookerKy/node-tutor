const condition = true;
const promise1 = new Promise((resolve, reject) => {
  if (condition) resolve("success");
  reject("fail");
});

const promise2 = new Promise((resolve, reject) => {
  if (condition) resolve("true");
  reject("false");
});
const promise3 = new Promise((resolve, reject) => {
  if (condition) resolve("possible");
  reject("impossible");
});

promise1
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

promise1
  .then((message) => {
    return new Promise((resolve, reject) => {
      resolve(`${message}1`);
    });
  })
  .then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve(`${message2}2`);
    });
  })
  .then((message3) => {
    console.log(message3);
  })
  .catch((error) => {
    console.error(error);
  });

/** 다른 promise와 다른 태스크 큐에서 돌아감 순서보장 안됨 */

(async () => {
  for await (result of [promise2, promise3]) {
    console.log(`result:${result}`);
  }
})();

/**__filename __dirname */

console.log(__filename);
console.log(__dirname);
