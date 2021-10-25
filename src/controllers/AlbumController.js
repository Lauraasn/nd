const database = require('../models');

class AlbumController {
    //async: espera resolver tudo dentro do método antes do encio da resposta
    static async pegaTodosOsAlbuns(req, res) {
        try {
            //await: aguarda até receber a resposta do BD
            const todosOsAlbuns = await database.Albuns_digitais.findAll();
            return res.status(200).json(todosOsAlbuns);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmAlbum(req, res) {
        const { id } = req.params;
        try {
            const umAlbum = await database.Albuns_digitais.findOne( {
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umAlbum);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaAlbum(req, res) {
        const novoAlbum = req.body;
        try {
            const novoAlbumCriado = await database.Albuns_digitais.create(novoAlbum);
            return res.status(200).json(novoAlbumCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaAlbum(req, res) {
        const novasInfosAlbum = req.body;
        const { id } = req.params;
        try {
            await database.Albuns_digitais.update(novasInfosAlbum, { where: { id: Number(id) } });
            const albumAtualizado = await database.Albuns_digitais.findOne( { where: { id: Number(id) } });
            return res.status(200).json(albumAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagarAlbum(req, res) {
        const { id } = req.params;
        try {
            await database.Albuns_digitais.destroy({ where: { id: Number(id) } });
            return res.status(200).json( {mensagem: `id ${id} deletado`} );
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = AlbumController