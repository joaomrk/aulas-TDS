const fs = require('fs');
// Dados a serem escritos no arquivo
const nome = 'João';
const sobrenome = 'Marco';
const idade = '23';

// Conteúdo a ser escrito no arquivo
const conteudo = `${nome} ${sobrenome}, ${idade} anos.\n`;

// Escreve no arquivo no modo de adição ('a')
fs.appendFile('arquivo.txt', conteudo, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Dados adicionados ao arquivo com sucesso!');
});