const http= require("http");
const behavior = (req, res) => {
    console.log(req.method);
    console.log(req.url);
    if (req.method === "POST" && req.url === "/books") {
        res.write("hello from post/books");
    }
    res.write("hello from" + req.method);
    res.end();
};

const server = http.createServer(behavior);
server.listen(8000, null, null, () => {
    console.log("server is running on port 8000");
});