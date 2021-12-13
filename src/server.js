import path from "path";

const express = require("express");
const app = express();

require('dotenv').config();
const cors = require('cors');

var corsOptions = {
    exposedHeaders: 'Authorization'
}

app.use(cors(corsOptions));

// configuração do parser para requisições post
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

//configurações estáticas
app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
//app.use('popperjs', express.static('./node_modules/popper.js/dist/umd'));
app.use('/publico', express.static(__dirname + '/publico'));

//configurações das páginas
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

/*
const pool = require('./dao/conexao');
*/

//Rota para a pasta "routes"
const routes = require('./routes');
routes(app);

//rotas da aplicação (pug)
app.get('/mostraFotografica', function (req, resp) {
    resp.render('pagAlbum')
});

app.get('/', function (req, resp) {
    resp.render('index')
});

app.get('/entrar', function(req, resp) {
    resp.render('loginADM')
});

app.get('/relatorio', function(req, resp) {
    resp.render('pagRelatorioAlbum')
});

// colocar servidor no ar
const PORTA = process.env.PORT || 8080;
app.listen(PORTA,function() {
    console.log(`Servidor rodando na porta ${PORTA}`); //antes era "8080" no lugar de "${PORTA}"
});

/* rotas da aplicação (feitas da forma antiga)
app.get('/album', function (req, resp) {
    resp.sendFile(__dirname + '/views/pagAlbum.html')
});

app.get('/', function (req, resp) {
    resp.sendFile(__dirname + '/views/pagAlbum.html')
});

app.get('/relatorio', function (req, resp) {
    resp.sendFile(__dirname + '/views/pagRelatorioAlbum.html')
});
*/


/* rotas

app.use('/publico', express.static(__dirname + '/publico'));

app.get('/album', function(req, resp) {
    resp.sendFile(__dirname + '/views/pagAlbum.html');
});

app.post('/album-digital', function(req, resp) {
    console.log(`
    req.body.nome = ${req.body.nome}
    req.body.cpf = ${req.body.cpf}
    req.body.nascimento = ${req.body.nascimento}
    req.body.nomeResponsavel = ${req.body.nomeResponsavel}
    req.body.cpfResponsavel = ${req.body.cpfResponsavel}
    req.body.telefone = ${req.body.telefone}
    req.body.email = ${req.body.email}
    req.body.estado = ${req.body.estado}
    req.body.cidade = ${req.body.cidade}
    req.body.titulo = ${req.body.titulo}
    req.body.fotografa = ${req.body.fotografa}
    req.body.foto = ${req.body.foto}
    `);

    pool.query(` INSERT INTO album_digital(nome, cpf, nascimento, nome_responsavel, cpf_responsavel, telefone, email, estado, cidade, titulo, fotografa, foto)
                 VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
                 [req.body.nome, req.body.cpf, req.body.nascimento, req.body.nomeResponsavel, req.body.cpfResponsavel, req.body.telefone, req.body.email, req.body.estado, req.body.cidade, req.body.titulo, req.body.fotografa, req.body.foto])
        .then(res => console.log('ok'))
        .catch(err => console.log('erro: ' + err));

    resp.sendFile(__dirname + '/views/pagAlbum.html');
});
*/