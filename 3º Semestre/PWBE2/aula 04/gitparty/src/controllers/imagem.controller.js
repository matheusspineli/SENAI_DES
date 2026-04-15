const prisma = require("../data/prisma");
const fs = require("fs");

const cadastrar = async (req, res) => {
    try {
        const idEvento = parseInt(req.params.id);
        const arquivo = req.file;

        const pastaFinal = `uploads/eventos/${idEvento}`;
        const caminhoFinal = `${pastaFinal}/${arquivo.filename}`;

        if (!fs.existsSync(pastaFinal)) {
            fs.mkdirSync(pastaFinal, { recursive: true });
        }

        fs.renameSync(arquivo.path, caminhoFinal);

        const imagem = await prisma.imagem.create({
            data: {
                nomeOriginal: arquivo.originalname,
                nomeArquivo: arquivo.filename,
                mimeType: arquivo.mimetype,
                path: caminhoFinal,
                tamanho: arquivo.size,       
                eventoId: idEvento,
            },
        });

        res.status(201).json(imagem).end();
    } catch (error) {
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }
        res.status(500).json({ error: error.message }).end();
    }
};

const listar = async (req, res) => {
    try {
        const idEvento = parseInt(req.params.id);  // lista imagens de um evento em específico

        const lista = await prisma.imagem.findMany({
            where: { eventoId: idEvento }
        });

        res.status(200).json(lista).end();
    } catch (error) {
        res.status(500).json({ error: error.message }).end();
    }
};

const buscar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const imagem = await prisma.imagem.findUnique({
            where: { id },
        });

        if (!imagem) {
            return res.status(404).json({ erro: "Imagem não encontrada" }).end();
        }

        if (!fs.existsSync(imagem.path)) {
            return res.status(404).json({ erro: "Arquivo não encontrado no servidor" }).end();
        }

        res.sendFile(imagem.path, { root: "." });
    } catch (error) {
        res.status(500).json({ error: error.message }).end();
    }
};

const atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const dados = req.body;

        const item = await prisma.imagem.update({
            where: { id: Number(id) },
            data: dados,
        });

        res.status(200).json(item).end();
    } catch (error) {
        res.status(500).json({ error: error.message }).end();
    }
};

const excluir = async (req, res) => {
    try {
        const { id } = req.params;

        const imagem = await prisma.imagem.findUnique({
            where: { id: Number(id) }
        });

        if (!imagem) {
            return res.status(404).json({ erro: "Imagem não encontrada" }).end();
        }

        // apaga o arquivo antes de deletar do banco
        if (fs.existsSync(imagem.path)) {
            fs.unlinkSync(imagem.path);
        }

        const item = await prisma.imagem.delete({
            where: { id: Number(id) },
        });

        res.status(200).json(item).end();
    } catch (error) {
        res.status(500).json({ error: error.message }).end();
    }
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir,
};
