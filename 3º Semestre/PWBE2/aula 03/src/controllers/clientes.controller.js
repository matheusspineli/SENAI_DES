const { email } = require("valibot");
const prisma = require("../data/prisma");

const novoCliente = async (req, res) => {
    const cliente = req.body;


    let nome = cliente.nome.trim().length;
    if (nome.length <= 2)
        return res.status(400).json({ erro: "Verificar se seu nome completo esta correto(deve conter pelo menos 2 nomes)" });

    let cpf = cliente.cpf.trim().replaceAll(".", "").replaceAll("-", "");
    if (cpf.length != 11)
        return res.status(400).json({ erro: "O cpf deve ter exatamente 11 caracteres" });

    //deve conter @ e .
    let email = cliente.email.toLowerCase();
    if(email.includes("@") && email.includes(".")){
        return res.status(400).json({ erro: "email sem @ ou . nao pode ser cadastrado"})
    }

    //nao ter duplicidade de email
    // const emailexistentes = await prisma.clientes.findMany({
    //     select: {
    //         email: true
    //     }
    // });

    // const emails = emailexistentes.some(c =>
    //     c.emails.toUpperCase() === emails
    // );

    // if (email) {
    //     return res.status(400).json({ erro: "Ja existe uma conta com esse email" });
    // }

    //primeiro deve ser numérico
    let cnh = cliente.cnh;
    if (isNaN(cnh.split("")[0])) {
            return res.status(400).json({ erro: "CNH deve começar com número" });
        }


    //para rodar depois de tudo dar certo só
    const nCliente = await prisma.clientes.create({
        data: cliente
    });

    res.json(nCliente).status(201).end();
}

const listarClientes = async (req, res) => {
    const clientes = await prisma.clientes.findMany();

    res.json(clientes).status(200).end();
}

const buscarCliente = async (req, res) => {
    const { id } = req.params;

    const cliente = await prisma.clientes.findUnique({
        where: { id },
        include: {
            clientes: true
        }
    });

    res.json(cliente).status(200).end();
};

const deletarCliente = async (req, res) => {
    const { id } = req.params;

    const cliente = await prisma.clientes.delete({
        where : { id }
    });

    res.json(cliente).status(200).end();
};

const atualizarCliente = async (req, res) => {

}

module.exports = {
    novoCliente,
    listarClientes,
    buscarCliente,
    deletarCliente,
    atualizarCliente
}