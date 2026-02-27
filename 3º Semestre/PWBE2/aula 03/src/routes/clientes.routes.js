const express = require("express");

const router = express.Router();

const ClientesControllers = require("../controllers/clientes.controller");

router.post("/novocliente", ClientesControllers.novoCliente);
router.get("/listarclientes", ClientesControllers.listarClientes);
router.get("/buscarcliente", ClientesControllers.buscarCliente);
router.delete("/deletarcliente", ClientesControllers.deletarCliente);
router.put("/atualizarcliente", ClientesControllers.atualizarCliente);


module.exports = router;