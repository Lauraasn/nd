const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'];
    jwt.verify(token, process.env.CHAVE_JWT, (erro, decode) => {
        if(erro){
            if(erro.name === "TokenExpiredError")
                return res.status(401).json({erro: erro_message, expiradoEm: erro.expiredAt});
                //return rews.status(401).json("Tempo expirado!");
            return res.status(401).json("Não autorizado!");
        }
        console.log("Decode.id: "+ decode.id);
        next();
    });
}