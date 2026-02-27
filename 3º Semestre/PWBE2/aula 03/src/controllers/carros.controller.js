const prisma = require("../data/prisma");
const novoCarro = async (req, res) => {
    const carro = req.body;

    let placa = carro.placa.trim().toUpperCase();
    if (placa.length != 7)
        return res.status(400).json({ erro: "Verificar placa(deve conter 7 caracteres)" });


    let ano = carro.ano.trim();
    if (ano.length != 4 )
        return res.status(400).json({ erro: "Verificar Ano(deve conter 4 caracteres)" })

    if (typeof (carro.ano) != "number")
        return res.status(400).json({ erro: "Não pode conter letras" })

    //nao deixar duplicidade
    const carros = await prisma.carros.findMany();

        const placas = carros.some(c =>
            c.placa.toUpperCase() === placa
        );

        if (placas) {
            return res.status(400).json({ erro: "Ja existe um carro com essa placa" });
        }

    const nCarro = await prisma.carros.create({
        data: carro
    });

    res.json(nCarro).status(201).end();
}

const listarCarros = async (req, res) => {
    const carros = await prisma.carros.findMany();

    res.json(carros).status(200).end();
};

const buscarCarro = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.findUnique({
        where: { id },
        include: {
            carros: true
        }
    });

    res.json(carro).status(200).end();
};

const deletarCarro = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.delete({
        where : { id }
    });

    res.json(carro).status(200).end();
};

const atualizarCarro = async(req, res) => {

}


module.exports = {
    novoCarro,
    listarCarros,
    buscarCarro,
    deletarCarro,
    atualizarCarro
}
