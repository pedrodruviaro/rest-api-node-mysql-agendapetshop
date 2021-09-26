const Atendimento = require("../models/atendimentos");

module.exports = (app) => {
    // listando todos os atendimentos
    app.get("/atendimentos", (req, res) => {
        Atendimento.lista(res);
    });

    // listando UM atendimento
    app.get("/atendimentos/:id", (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.buscaPorId(id, res);
    });

    // criando um atendimento
    app.post("/atendimentos", (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res);
    });

    // alterando um atendimento (PATCH)   = pode ser POST tbm
    app.patch("/atendimentos/:id", (req, res) => {
        const id = req.params.id;
        const valores = req.body;

        Atendimento.altera(id, valores, res);
    });

    // apagando um atendimento (DELETE)
    app.delete("/atendimentos/:id", (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.deleta(id, res);
    });
};
