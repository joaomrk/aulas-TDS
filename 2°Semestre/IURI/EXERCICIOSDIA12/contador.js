/*
Crie uma classe TypeScript chamada `Contador` que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer os seguintes métodos:

a) `zerar()`: Reseta o valor do contador para zero.

b) `incrementar()`: Incrementa o valor do contador em uma unidade.

c) `valor(): number`: Um método que retorna o valor atual do contador.
*/
var Contador = /** @class */ (function () {
    function Contador(numero) {
        this.numero = numero;
    }
    Contador.prototype.zerar = function () {
        this.numero = 0;
        console.log('zerou essa porra');
    };
    Contador.prototype.incrementar = function () {
        this.numero++;
        console.log(this.numero);
    };
    Contador.prototype.valor = function () {
        console.log(this.numero);
    };
    return Contador;
}());
var contador1 = new Contador(5);
contador1.incrementar();
contador1.valor();
contador1.zerar();
contador1.valor();
