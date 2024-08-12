let opcao = null
const ask = require('readline-sync')
 
while(opcao !== 0){
    console.log('MENU')
    console.log('1 - Cadastrar novo usuário')
    console.log('2 - Ver pessoas')
   
    console.log('0 - Encerrar execução')
    opcao = ask.question('Digite uma opção')
 
    //Mostrar MENU de opções ao usuário
 
    switch(opcao){
        case 1:
            require('./Cadastro.js')
            break;
        case 2:
           
        case 0: break;
        default:
            console.log('Opção invalida')
            break;
    }
}

