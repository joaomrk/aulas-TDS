class Aluno {
    nome : String  
    notas : Array<number>

    constructor(nome: string){
        this.nome = nome
        this.notas = []
    }
    addNotas(notas: number): void{
        this.notas.push(notas)
    }
    calcularMedia() : number {
        let soma = 0
    
        for (let i = 0;i < this.notas.length; i++){
            soma += this.notas[i]
        }
        let media : number = soma / this.notas.length
        return media
    }

    

    
}
const alunoTDS = new Aluno('Adrian')
alunoTDS.addNotas(10)
alunoTDS.addNotas(9.8)
alunoTDS.addNotas(9.4)

console.log(alunoTDS.calcularMedia().toFixed(2))