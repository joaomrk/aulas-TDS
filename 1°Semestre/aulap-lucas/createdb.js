const sqlite3 = require('sqlite3').verbose();

// Abrindo uma conexão com o banco de dados SQLite (criando o arquivo se não existir)
const db = new sqlite3.Database('exemplo.db');

// Criando uma tabela chamada "usuarios"
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, sobrenome TEXT, idade TEXT)");

    // Inserindo alguns dados na tabela
    const stmt = db.prepare("INSERT INTO usuarios (nome, sobrenome, idade) VALUES (?, ?, ?)");
    stmt.run("João", "joao@example.com","23");
    stmt.run("Maria", "maria@example.com","28");
    stmt.finalize();

    // Consultando os dados da tabela e imprimindo no console
    db.each("SELECT id, nome, sobrenome, idade FROM usuarios", (err, row) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log(row.id + "\t" + row.nome + "\t" + row.sobrenome + "\t" + row.idade + "\t");
    });
});

// Fechando a conexão com o banco de dados
db.close((err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Conexão com o banco de dados fechada com sucesso.');
});
