let httpProxy = require('http-proxy');
let fs = require('fs');
let host = '127.0.0.1';
let port = 8000;
if (process.env.GETH_HOST !== undefined) {
    host = process.env.GETH_HOST;
    console.log("GETH_HOST = " + host);
}
if (process.env.GETH_PORT !== undefined) {
    port = process.env.GETH_PORT;
    console.log("GETH_PORT = " + port);
}

httpProxy.createServer({
    target: {
        host: host,
        port: port
    },
    ssl: {
        key: fs.readFileSync('/certs/proxy.test.sonm.key', 'utf8'),
        cert: fs.readFileSync('/certs/proxy.test.sonm.crt', 'utf8')
    }
}).on('error', function(e) {
    console.log(JSON.stringify(e, null, ' '))
}).listen(8545);