
// creating local Server
import http from "node:http"

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);


// npm install packageName
// npm uninstall packageName

// npm i pkgName@version
import oneLinerJoke from "one-liner-joke"
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)

import chalk from "chalk";


console.log(chalk.green("Hello from Node.js with Chalk! 🚀"));
console.log(chalk.blue.bold("This is bold blue text"));
console.log(chalk.red.underline("This is underlined red text"));
console.log(chalk.yellow.bgMagenta("Yellow text with Magenta background"));


// i have learned : npm is place for precreated codes to reuse in your project
// type : module   uses  "import" for  any package
// default or commonjs uses "require"



// -------------Express JS--------------
// Handles Requests
// npm package
// simple syntax compared to raw Node.js.
// makes webServers and API;s much easier
// frameWork : it has flow to ease  (Express , Angular) it controls the flow , rules
// library : it is a tool (pick at anytime)s  (CHALK ,REACT) you control the code , flexible
// from accecpting and responsing the request , data flow uses express js
// data BAses cnnectivity to server 