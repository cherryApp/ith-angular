var http = require('http');
var fs = require('fs');

function setHeaders(res) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
};

http.createServer( (req, res) => {
    setHeaders(res);
    console.log(req.method);
    if (req.url == '/matches' && req.method.toLowerCase() == 'get') {
        fs.readFile('./matches.json', 'utf8', (err, data) => {
           res.end(data); 
        });
    } else if (req.url == '/matches' && req.method.toLowerCase() == 'post') {
        var postData = '';
        req.on('data', (piece) => {
            postData += piece;
        });
        req.on('end', () => {
            console.log(postData);
            res.end(postData);
        });
    } else {
        res.end('Hello, ez a szerver');        
    }
}).listen(5214);

