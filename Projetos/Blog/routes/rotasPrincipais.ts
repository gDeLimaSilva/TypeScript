const expressRotas = require('express')
const path = require('path')
const router = expressRotas.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/index.html'))
})

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/login.html'))
})

router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/cadastro.html'))
})

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/home.html'))
})

router.get('/alterar', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/alterar.html'))
})

router.get('/remover', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/remover.html'))
})

router.get('/recuperar', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/recuperar.html'))
})

module.exports = router