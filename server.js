// Constantes padrão
const express = require("express");
const app = express();
const connection = require("./database/database");
const port = 80;
const Usuario = require("./database/Usuario");


// Conexão com o banco de dados
connection
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados feita com sucesso!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });


// Estou dizendo para o Express usar o EJS como view engine
app.set('view engine','ejs');
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// Rotas
app.get("/", (req, res) => { // Rota da home
    res.render("index", {
    });
});

// Rota da tela de login
app.get("/login", (req, res) => {
    res.render("login", {
    });
});

// Rota para fazer login
app.post("/logar", (req, res) => {
    var UserEmail = req.body.UserEmail;
    var UserPassworld = req.body.UserPassworld;
    Usuario.findOne({
        where: {email: UserEmail}
    })
    .then(usuario => {
        if(usuario.email == undefined){
            res.send("Usuario não existe");
        }else if(usuario.passworld != UserPassworld){
            res.send("Senha incorreta!");
        }else{
            //res.send("teste");
            res.redirect("/perfilusuario/"+usuario.id+"/"+usuario.name);
        }
    })
    .catch((msgErro) => {
        res.send("Email não econtrado");
    });
});

// Rota da tela de usuário
app.get("/perfilusuario/:id/:name", (req, res) => {
    var id = req.params.id;
    Usuario.findOne({
        where: {id: id}
    })
    .then(usuario => {
        res.render("perfilusuario", {
            usuario: usuario
        });
    });
});

// Iniciando node
app.listen(port, ()=>{
    console.log("App rodando! Na porta: " + port);
});