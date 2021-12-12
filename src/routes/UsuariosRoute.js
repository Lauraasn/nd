//Importando o router do Express
//As chaves indicam que a propriedade Router de express será atribuída a uma constante
const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const auth = require("../middleware/auth");
//const login = require('../middleware/login');

//Iniciando o router do express
const router = Router();

router.get('/usuarios', auth, UsuarioController.pegaTodosOsUsuarios);
router.get('/usuarios/:id', auth, UsuarioController.pegaUmUsuario);
router.post('/usuarios', auth, UsuarioController.criaUsuario);
router.put('/usuarios/:id', auth, UsuarioController.atualizaUsuario);
router.delete('/usuarios/:id', auth, UsuarioController.apagarUsuario);

router.post('/login', UsuarioController.login);
//router.post('/logout', UsuarioController.logout);

 module.exports = router;