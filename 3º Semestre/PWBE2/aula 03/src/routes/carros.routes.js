const express = require("express");

const router = express.Router();

const CarrosControllers = require("../controllers/carros.controller");

router.post("/novocarro", CarrosControllers.novoCarro);
router.get("/listarcarros", CarrosControllers.listarCarros);
router.get("/buscarcarro", CarrosControllers.buscarCarro);
router.delete("/deletarcarro", CarrosControllers.deletarCarro);
router.put("/atualizarcarro", CarrosControllers.atualizarCarro);


module.exports = router;