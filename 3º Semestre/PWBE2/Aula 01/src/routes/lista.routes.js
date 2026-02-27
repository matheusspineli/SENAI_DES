const express = require("express");

const Router = express.Router();

const listaController = require("../controllers/lista.controller");

Router.get("/listar", listaController.listarItens);

module.exports = Router;