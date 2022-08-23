const express = require("express");
const app = express();
const port = 3001;
var bodyParser = require("body-parser");
const mysql = require("mysql2");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("api rodando");
});

app.get("/book", (req, res) => {
  res.send("api rodando");
});

app.post("/book", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  if (!title || !pageqty) {
    return res.status(400).send("Dados Inválido");
  }

  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}','${pageqty}')`;
  conn.query(sql, (err) => {
    if (err) {
      console.log("Erro ao conectar ao mysql", err);
      return;
    }
  });
  res.status(200).send("Dados enviado");
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "96191319@Bc",
  database: "nodemysql",
});

conn.connect((err) => {
  if (err) {
    console.log("Erro ao conectar ao mysql", err);
    return;
  }
  console.log("Conectado com sucesso ao mysql!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
