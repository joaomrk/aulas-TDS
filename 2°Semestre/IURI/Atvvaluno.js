var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
        this.notas = [];
    }
    Aluno.prototype.addNotas = function (notas) {
        this.notas.push(notas);
    };
    Aluno.prototype.calcularMedia = function () {
        var soma = 0;
        for (var i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        var media = soma / this.notas.length;
        return media;
    };
    return Aluno;
}());
var alunoTDS = new Aluno('Adrian');
alunoTDS.addNotas(10);
alunoTDS.addNotas(9.8);
alunoTDS.addNotas(9.4);
console.log(alunoTDS.calcularMedia().toFixed(2));
