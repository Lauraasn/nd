//função comum: function() {}
//arrow function: () => {}

const albuns = require('./albunsRoute');

module.exports = app => {
    app.use(albuns);
}