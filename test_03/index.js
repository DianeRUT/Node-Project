const http = require("http");

// const { json } = require("stream/consumers");
const behavior = (req, res) => {
    
    console.log(req.method);
    console.log(req.url);
if (req.method ==='GET' && req.url ==="/books") {
    // res.write("hello from GET/books");
    // res.writeHead(200, { 'Content-Type': 'application/json' });
res.write(JSON.stringify({title: "chemistry", pages: 200}));
    }
if( req.method ==='PUT' && req.url ==="/books"){
    res.write("hello from PUT/books")
    
}
//  if(req.method ==='DELETE' && req.url ==="/books"){
//     res.write("hello from DELETE/books")
    
// }
// if(req.method ==='GET' && req.url ==="/books"){
//     res.write("hello from GET/books/");
   
// }
 if(req.method ==='POST' && req.url ==="/books"){
    res.write("hello from POST/books")
    
}
// if(req.method ==='PUT' && req.url ==="/books/author"){
//     res.write("hello from PUT/books/author")
 
// }
res.end();
};
const server = http.createServer(behavior);
server.listen(8900, null, null, null, () =>{
    console.log("server is running on port 8900");
});