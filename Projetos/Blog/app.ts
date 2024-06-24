const express = require('express')
const rotasPrincipais = require('rotasPrincipais')

const app = express();

app.use('/', router)

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080.')
})
