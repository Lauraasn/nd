const express = require("express");

const app = express();

// configuração do parser para requisições post
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

/*
const pool = require('./dao/conexao');
*/

// colocar servidor no ar
const PORTA = process.env.PORT || 8080;
app.listen(PORTA,function() {
    console.log(`Servidor rodando na porta ${PORTA}`); //antes era "8080" no lugar de "${PORTA}"
});

// rotas
app.get('/teste', (req, res) => res
    .status(200)
    .send({
        mensagem: 'Bem vinda!'
    })
);

/*
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