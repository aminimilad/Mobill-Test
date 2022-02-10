const http = require("http");

const host = 'localhost';
const port = 8000;


const x = 'https://mobill.se/qr?ref=AKEA&zoneid=101&screen=charge&outletId=122';
let url = x.split(/[?]/).pop();
let sentences = url.split(/[&]/);



const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("hej");
}; 

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
    console.log(sentences);
});
