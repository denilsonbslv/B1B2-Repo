const express = require("express");
const app = express();
const connection = require("./database/database");
const Usuario = require("./database/Usuario");

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

app.post("/perfilusuario", (req, res) => {
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
            res.render("PerfilUsuario", {
                usuario: usuario
            });
        }
    })
    .catch((msgErro) => {
        res.send("Email não econtrado")
    });
});

app.get("/perfilusuario", (req, res) => {
    var usuario = req.body.usuario;
    res.render("PerfilUsuario", {
        usuario: usuario
    });
})

app.listen(8080, ()=>{
    console.log("App rodando!")
});