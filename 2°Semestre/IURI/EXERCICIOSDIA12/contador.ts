/*
Crie uma classe TypeScript chamada `Contador` que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer os seguintes métodos:

a) `zerar()`: Reseta o valor do contador para zero.

b) `incrementar()`: Incrementa o valor do contador em uma unidade.

c) `valor(): number`: Um método que retorna o valor atual do contador.
*/

class Contador{
    numero: number

    constructor(numero:number){
        this.numero = numero
    }

    zerar():void {
        this.numero = 0
        console.log('zerou essa porra')
    }

    incrementar(): void {
        this.numero ++
        console.log(this.numero)
    }

    valor():void{
        console.log(this.numero);    
    }
}

let contador1 = new Contador(5)
contador1.incrementar()
contador1.valor()
contador1.zerar()
contador1.valor()


