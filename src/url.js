const url = require("url");
const querystring = require("querystring");

const URL = url.URL;
const myURL = new URL("http://www.gilbut.co.kr/book/bookList.aspx?sercate1=0010010000#anchor");
const parseURL = url.parse("http://www.gilbut.co.kr/book/bookList.aspx?sercate1=0010010000#anchor");
console.log("WATHWG 방식의 url " + myURL);
console.log("general node url : " + parseURL);
console.log(url.format(myURL));
console.log(url.format(parseURL));

/* WHATWG url searchParams 내장 함수*/
const searchParamsURL = new URL("http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript");
console.log(searchParamsURL.searchParams);
console.log(searchParamsURL.searchParams.getAll("category"));
console.log(searchParamsURL.searchParams.get("limit"));
console.log(searchParamsURL.searchParams.has("page"));
console.log(searchParamsURL.searchParams.keys());
console.log(searchParamsURL.searchParams.values());

searchParamsURL.searchParams.append("filter", "es3");
searchParamsURL.searchParams.append("filter", "es5");
console.log(searchParamsURL.searchParams.getAll("filter"));

searchParamsURL.searchParams.set("filter", "es6");
console.log(searchParamsURL.searchParams.getAll("filter"));

searchParamsURL.searchParams.delete("filter");
console.log(searchParamsURL.searchParams.getAll("filter"));

console.log(searchParamsURL.searchParams.toString());
searchParamsURL.search = searchParamsURL.searchParams.toString();

/** url.parse를 이용할 때 querystring 모듈을 이용한 편리한 방법 */
const queryURL = url.parse("http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript");

const query = querystring.parse(queryURL.query);
console.log(query);
console.log(querystring.stringify(query));
