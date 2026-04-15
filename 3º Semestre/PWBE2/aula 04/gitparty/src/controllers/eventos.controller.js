const prisma = require("../data/prisma");
const {
    validarDataEvento,
    cancelarInscricoesDoEvento,
    validarExclusao,
    encerrarEventoSeNecessario
} = require("../services/eventos.services");

const cadastrar = async (req, res) => {
    try {
        const data = req.body;

        await validarDataEvento(data.data_evento);

        const item = await prisma.eventos.create({ data });

        res.status(201).json(item).end();
    } catch (error) {
        res.status(500).json(error.toString()).end();
    }
};

const listar = async (req, res) => {
    const lista = await prisma.eventos.findMany({
        include: { inscricoes: true, imagens: true }
    });
    res.status(200).json(lista).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.eventos.findUnique({
        where: { id: Number(id) },
        include: { inscricoes: true, imagens: true }
    });

    res.status(200).json(item).end();
};

const atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const dados = req.body;

        if (dados.status === "ENCERRADO") {
            await encerrarEventoSeNecessario(Number(id));
        }

        if (dados.status === "CANCELADO") {
            await cancelarInscricoesDoEvento(Number(id));
        }

        const item = await prisma.eventos.update({
            where: { id: Number(id) },
            data: dados
        });

        res.status(200).json(item).end();
    } catch (error) {
        res.status(500).json(error.toString()).end();
    }
};

const excluir = async (req, res) => {
    try {
        const { id } = req.params;

        await validarExclusao(Number(id));

        const item = await prisma.eventos.delete({
            where: { id: Number(id) }
        });

        res.status(200).json(item).end();
    } catch (error) {
        res.status(500).json(error.toString()).end();
    }
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
};