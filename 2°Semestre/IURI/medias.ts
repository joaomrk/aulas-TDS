let ask = require('readline-sync')

export interface aluno {
    constructor(matricula: number,nome:string,notaProva1:number, notaProva2:number,notaTrabalho:number)
}

export class aluno implements aluno{
    public matricula: number
    public nome:string
    public notaProva1:number
    public notaProva2:number
    public notaTrabalho:number
     ["constructor"](matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number) {
       this.matricula = matricula
       this.nome = nome 
       this.notaProva1 = notaProva1
       this.notaProva2 = notaProva2
       this.notaTrabalho = notaTrabalho

     }
     public getAluno(): void{
        console.log(`Nome:${this.nome}, Matrícula:${this.matricula}, Notas: P1:${this.notaProva1},P2:${this.notaProva2}`)
    }
    
    public setAluno(): void{
        let nomeAluno = ask.qu
    
    }

}

