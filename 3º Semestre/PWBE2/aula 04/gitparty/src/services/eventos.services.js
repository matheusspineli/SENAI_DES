const prisma = require("../data/prisma");

const validarDataEvento = async (dataEvento) => {
    const hoje = new Date();
    const data = new Date(dataEvento);

    if (data < hoje) {
        throw new Error("Não é possível cadastrar um evento com data passada.");
    }
};

const cancelarInscricoesDoEvento = async (eventoId) => {
    await prisma.inscricoes.updateMany({
        where: {
            eventoId,
            status: { in: ["CONFIRMADA", "LISTA_ESPERA"] }
        },
        data: { status: "CANCELADA" }
    });
};

const validarExcluir = async (eventoId) => {
    const inscricoesAtivas = await prisma.inscricoes.findMany({
        where: {
            eventoId,
            status: { in: ["CONFIRMADA", "LISTA_ESPERA"] }
        }
    });

    if (inscricoesAtivas.length > 0) {
        throw new Error("Não é possível excluir um evento com inscrições ativas.");
    }
};

const encerrarEvento = async (eventoId) => {
    const evento = await prisma.eventos.findUnique({
        where: { id: eventoId }
    });

    if (!evento) throw new Error("Evento não encontrado.");

    const hoje = new Date();
    const dataEvento = new Date(evento.data_evento);

    if (dataEvento > hoje) {
        throw new Error("Não é possível encerrar um evento que ainda não ocorreu.");
    }
};

module.exports = {
    validarDataEvento,
    cancelarInscricoesDoEvento,
    validarExcluir,
    encerrarEvento
};