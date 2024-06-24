"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var path_1 = require("path");
exports.router = express_1.default.Router();
exports.router.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../view/index.html'));
});
exports.router.get('/login', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../view/login.html'));
});
exports.router.get('/cadastro', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../view/cadastro.html'));
});
exports.router.get('/home', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../view/home.html'));
});
exports.router.get('/alterar', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../view/alterar.html'));
});
exports.router.get('/remover', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../view/remover.html'));
});
exports.router.get('/recuperar', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../view/recuperar.html'));
});
