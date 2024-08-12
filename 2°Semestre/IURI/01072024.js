var ask = require('readline-sync');
var Produto = /** @class */ (function () {
    function Produto(nome, preco, marca, descricao, valorVenda) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.descricao = descricao;
        this.valorVenda = valorVenda;
    }
    Produto.prototype.setProduto = function () {
        var nomeUpdate = "";
    };
    Produto.prototype.setLucro = function () {
        (this.valorVenda - this.preco);
    };
    Produto.prototype.getProduto = function () {
    };
    Produto.prototype.getVenda = function () {
    };
    return Produto;
}());
var venda = /** @class */ (function () {
    function venda(produto, quantidade, valorTotal, data) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
        this.data = data;
    }
    return venda;
}());
