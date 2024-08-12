ask = require("readline-sync")
let pergunta
let soma = 0
while (pergunta !== 0){
    pergunta = Number(ask.question("qual o numero?"))
    
    soma += pergunta  
       

}
console.log(soma)
//o codigo tem um loop que recebe numeros e no final soma eles quando a resposta dos numeros é 0