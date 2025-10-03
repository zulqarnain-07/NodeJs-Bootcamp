// cookie : har request k last ma user (requestor) ki id hoti jis se server ko wo session with us banda yaad rehta ha
// you login and server identfies you through cookie(as identity) for session

import express from "express";
import bodyParser from "body-parser"
import { fileURLToPath } from "url";
import path from "path";


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
// set public as static for css accessing
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 
// set views folder using ejs as dynamic renderer



app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/submit", (req, res) => {
  const { username, email } = req.body;

  res.render("response" , {username , email})
//   use to render view template (dynamic wala html)
//  "name of file" , {variables to chnage (written in <%= %>)}
});



app.listen(3000 , ()=>{
    console.log("Server running on http://localhost:3000")
})


// isme mane ek HTML input form bnaya jisko mane route "/" pr send kiya and usne through button post methdo call kiya jisme usne form action "/" k method post k zariye req ki body ma data receive kiya or res.send se route pr response bejha



