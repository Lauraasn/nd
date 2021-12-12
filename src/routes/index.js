//função comum: function() {}
//arrow function: () => {}

const albuns = require('./albunsRoute');
const usuarios = require('./usuariosRoute');

module.exports = app => {
    app.use(albuns);
    app.use(usuarios);
}