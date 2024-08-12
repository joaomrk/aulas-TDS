const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('exemplo.db')

db.run(
    `
    CREATE TABLE IF NOT EXISTS Funcionarios (
        id INTEGER PRIMARY KEY,
        nome TEXT NOT NULL,
        cargo TEXT,
        salario REAL
    )  
    `,
)
    (err) => {
        if (err) {
            console.error('erro ao criar a tabela Funcionarios:', err.message);
        } else {
            console.log('Tabela Funcionarios criada com sucesso.')
            const funcionarios = [
                {nome:'joao silva',cargo:'desenvolvedor',salario:4500.00},
                {nome:'maria oliveira',cargo:'analista',salario:5500.00},
                {nome:'pedro souza',cargo:'gerente',salario:7500.00}
            ];
            const insertQuery = `
            INSERT INTO Funcionarios(nome,cargo,salario)
            VALUES (?,?,?)
            `;
            funcionarios.forEach((funcionario) => {
                db.run(insertQuery,[funcionario.nome,funcionario.cargo,funcionario.salario],function(err){
                    if(err) {
                        console.error('ERRO ao inserir funcionario:',err.message);
                    } else {
                        console.log(`Funcionário inserido com sucesso. ID:${this.lastID}`)
                    }
                    })
                })

        db.close((err)=>{
    if(err) {
        return console.error('Erro ao fechar o banco de dados:',err.message)
    }
    console.log('Conexão com o banco de dados SQLite fechada.')
})
            }

        }
    