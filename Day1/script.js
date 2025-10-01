// First Package
// Callback And Sync API
// using Documentaiton
// Jo filehandeling ha Wo C language ma hoi ha joke Chrome k V8 Engine ma use hui ha so node js ek environment provide krta ha javascript k runtime ko , ye wrapper ki trah behave krta joke C lang ma code ko parse krta 

// require Package
const fs = require(`fs`);
const { callbackify } = require("util");
// File Handling
function Callback(err){
    if(err)console.error(err);
    else console.log("Done!")
}
// fs.writeFile("first.txt","Hello Nodejs ",Callback)

// fs.appendFile("first.txt","Its introduction to NodeJs",Callback)

// fs.rename("first.txt","second.txt",Callback)

// fs.copyFile("second.txt","./copy.txt",Callback)
// fs.unlink("copy.txt",Callback)

// fs.mkdir("myFolder",Callback)
// To avoid errors if the folder exists, use { recursive: true }:
fs.mkdir("myFolder",{recursive:true},Callback)
fs.writeFile("myFolder/third.txt","CreatedThirdTime" , Callback)