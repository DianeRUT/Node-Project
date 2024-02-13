// const { generateRandomString } = require("./utils/helper.util");
import {generateRandomString} from "./utils/helper.util.js";

function books (req, res) {
console.log(generateRandomString(10));
if (req.method === "GET") {
    // 
}

if (req.method === "POST") {

}
if (req.method === "GET") {
// 
}

if (req.method ==="PUT") {
    // 
}

if (req.method === "DELETE") {
    // 
}

    res.write("hello books");
}

export default books;