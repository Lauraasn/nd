//Importando o router do Express
//As chaves indicam que a propriedade Router de express será atribuída a uma constante
const { Router } = require('express');
const AlbumController = require('../controllers/AlbumController');

//Iniciando o router do express
const router = Router();

router.get('/relatorio', AlbumController.pegaTodosOsAlbuns);
router.get('/albuns/:id', AlbumController.pegaUmAlbum);
router.post('/albuns', AlbumController.criaAlbum);
router.put('/albuns/:id', AlbumController.atualizaAlbum);
router.delete('/albuns/:id', AlbumController.apagarAlbum);

 module.exports = router;