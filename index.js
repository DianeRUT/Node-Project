// const http = require("http");
import http from "http";
// const books = require("./books");
import books from "./books.js";
// const authors = require("./authors");
import authors from "./authors.js";
// const { generateRandomString } = require("./utils/helper.util");
import {generateRandomString} from "./utils/helper.util.js";

const server = http.createServer((req, res) => {
    console.log(generateRandomString(30));
     
    if (req.url === "/books") {
        books(req, res);
        // return statement
    } 
    if (req.url=== "/authors") {
        authors(req, res);
    }
    // res.write("hello Kigali");
    res.end();
});
server.listen(3000, () => {
console.log("server is running on port 3000");
})

