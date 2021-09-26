class Tabelas {
  init(conexao) {
    //   passando conexao para o escopo
    this.conexao = conexao;
    this.criarAtendimentos(conexao);
  }

  criarAtendimentos() {
    // alterando tabela => ALTER TABLE `agenda-petshop`.atendimentos add data datetime NOT NULL, add dataCriacao datetime NOT NULL;
    const sql =
      "CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela atendimentos criada com sucesso!");
      }
    });
  }
}

module.exports = new Tabelas();
