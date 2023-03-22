const express = require("express");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true})) // Leer reques.body de un form

// app.get("/formulario", (req, res) => {
//   const { nombre } = req.query;
//   res.send(`Formulario enviado ${nombre} `);
// });

app.post("/formulario", (req, res) => {
  console.log(req.body);
  res.send(`Formulario enviado "POST" `);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/juan", (req, res) => {
  res.end("Hello juan");
});

app.listen(PORT, () => {
  console.log(`Example in http://localhost:${PORT}`);
});
