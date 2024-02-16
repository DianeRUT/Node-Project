const http = require('http');
 const behavior = (req, res) => {
    // res.write("hello from page" + req.url);
    switch(req.url) {
        case "/" : 
            res.statusCode = 201;
            res.write("hello from page root ");
        break;

        case "/about" :
            res.write("hello from about");
        break;

        case "/contact" :
            res.write("hello from page contact");
        break;

        default :
        res.statusCode = 417;
        res.write ("hello from page" + req.url);
        break;
    }
    res.end();
    
 };

const server = http.createServer(behavior);
server.listen(5000, () => {
    console.log("server is running on port 8900");
})