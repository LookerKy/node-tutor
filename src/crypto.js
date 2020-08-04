const crypto = require("crypto");

/** 기본적인 hash algorithm, 해쉬알고리즘 -암호화할 문자열 - 인코딩할 알고리즘 */
const base64pass1 = crypto.createHash("sha512").update("비밀번호").digest("base64");
const hexPass = crypto.createHash("sha512").update("비밀번호").digest("hex");
const latin = crypto.createHash("sha512").update("비밀번호").digest("latin1");

console.log(base64pass1);
console.log(hexPass);
console.log(latin);

/** pbkdf2 알고리즘
 * 구현 간단함(암호화할 문자열, 문자열에 붙일 64비트 랜덤문자열, 반복횟수, 출력 바이트 , 암호화 알고리즘, 결과 콜백)
 * scrypt 나 bcrypt 에 비해 취약
 */

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString("base64");
  console.log(`salt : ${salt}`);
  crypto.pbkdf2("비밀번호", salt, 10000, 64, "sha512", (err, key) => {
    console.log(`password : ${key.toString("base64")}`);
  });
});

/** 양방향 알고리즘은 양방향 비대칭형 암호화 , HMAC 등의 다양한 암호화를 제공 중 */
