import express from "express"
const app = express()



// app wo sab krega jo express kr skta or expres() sab kar sakta

// we can create routes like website.com/route1








// A middleware function
// har server request se pehle isse chalao
app.use((req, res, next) => {
  console.log("Middleware running... URL:", req.url);
  next(); // move to the next route
});

app.get("/", (req, res) => {
  res.send("Hello from Home 🚀");
});

app.get("/about", (req, res) => {
  res.send("Hello from About 👋");
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});



// npm i nodemon -g  (get Live server for backend)
// nodemon script.js (to start)


// frontend  -  backend  -  frontend