let httpProxy = require('http-proxy');
let fs = require('fs');
let host = '127.0.0.1';
let port = 8000;
if (process.env.TARGET_HOST !== undefined) {
    host = process.env.TARGET_HOST;
    console.log("TARGET_HOST = " + host);
}
if (process.env.TARGET_PORT !== undefined) {
    port = process.env.TARGET_PORT;
    console.log("TARGET_PORT = " + port);
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