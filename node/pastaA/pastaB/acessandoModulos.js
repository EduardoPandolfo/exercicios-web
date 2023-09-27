const moduloA = require('../../moduloa'); // funciona mac/windows e existe problema de deploy em linux
const moduloB = require('C:\\Users\\Eduardo\\Documents\\javascript\\exercicios-web\\node\\moduloB.js'); // usando caminho absoluto (copy path)
console.log(moduloA.ola);
console.log(moduloB.bomDia);

const c = require('./pastaC/index');
console.log(c.ola2);

const http = require('http'); //modulo interno
http.createServer((req, res) => {
    res.write('Bom dia');
    res.end();
}).listen(8080); // http://localhost:8080