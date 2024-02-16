// require("./batman");
// require("./superman");

// function hello() {
//     console.log("hello world");
// }
// hello();

// creating a simple server

// import into module
const http = require('http');
// const path = require("path");
 const fs = require("fs");
// const os = require("os");

// // creating a server
const server = http.createServer((req , res) => {
//     console.log(req.headers);
//     console.log(process.env.NODE_ENV);
//     console.log(os.platform());
console.log(process.version);
    console.log(req.url);
    console.log(req.method);
    if (req.url === "/") {
        res.write("helloworld!");
        res.end();
    }
    else if (req.url === "/hello" && req.method === "POST") {
        res.write("hello altschoolers!");
        res.end();
    }
    else if (req.url === "/read"){
       fs.readFile("./hello.txt", (err, data) =>{
        if(err){
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
       });
    }
    else {
        res.write("404 not found - we don't know what you are looking for");
        res.end();
    }
        
// console.log(path.dirname(__filename));
//  fs.mkdir(path.dirname(__filename) + "/test" , (err) => {
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("folder created");
//     }
//  }); 
//  res.end('welcome altschoolers');
});
server.listen(8000, null, null, null, () => {
 console.log("server is running on port 8000");
});