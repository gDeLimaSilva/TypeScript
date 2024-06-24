"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var rotasPrincipais_1 = require("./routes/rotasPrincipais");
var app = (0, express_1.default)();
app.use('/', rotasPrincipais_1.router);
app.listen(8080, function () {
    console.log('Servidor rodando na porta 8080.');
});
