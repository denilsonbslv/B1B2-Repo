const express = require("express");
const app = express();
const connection = require("./database/database");

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados feita com sucesso!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

// Estou dizendo para o Express usar o EJS como view engine
app.set('view engine','ejs');
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    res.render("index", {
    });
});

app.get("/login", (req, res) => {
    res.render("login", {
    });
});

app.post("/logar", (req, res) => {
    var UserEmail = req.body.UserEmail;
    var UserPassworld = req.body.UserPassworld;

    res.send("E-mail: " + UserEmail + "\nSenha: " + UserPassworld);
})

app.listen(8080, ()=>{
    console.log("App rodando!")
});