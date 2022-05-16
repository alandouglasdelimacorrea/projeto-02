const express = require('express');
const app = express();

const rotaEmpresas = require('./rotas/empresas');
const rotaVagas = require('./rotas/vagas')
const cors = require('cors')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors({
    origin: '*'
}));

app.use('/vagas', rotaVagas);
app.use('/empresas', rotaEmpresas);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});


module.exports = app
