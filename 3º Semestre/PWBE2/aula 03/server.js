require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// importar rotas e aplica-las
const CarrosRoutes = require("./src/routes/carros.routes");
const ClientesRoutes = require("./src/routes/clientes.routes");

// fim das rotas
app.use(CarrosRoutes);
app.use(ClientesRoutes);

app.listen(process.env.PORT_APP, () => {
    console.log("Online na porta " + process.env.PORT_APP);
});