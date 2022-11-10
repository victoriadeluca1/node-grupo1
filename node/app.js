//server

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("respuesta del servidor...");
  res.end("Te envío un saludo desde el servidor con node.js");
});

const puerto = 5500;

server.listen(puerto, () => {
  console.log("Escuchando...");
});

//modulo vaca

// var cowsay = require("cowsay");
// console.log(
//   cowsay.say({
//     text: "I'm a moooodule",
//     e: "Oo",
//     T: "U",
//   })
// );