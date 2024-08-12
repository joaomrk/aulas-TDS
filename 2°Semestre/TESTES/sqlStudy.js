const sqlite3 = require('sqlite3');
let db = new sqlite3.Database('agenda.db');

let sql = `SELECT nome,email FROM contatos`

db.all(sql, [], (erro, linhas) => {
    if(erro) throw erro;
    console.table(linhas);
});

db.close();