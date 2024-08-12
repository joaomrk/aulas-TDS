interface Aluno{
    matricula: number
    nome: string
    notaProva1: number
    notaProva2: number
    notaTrabalho: number

   
    media(): number;
    final(): number;
}

class Aluno implements Aluno{
    constructor(matricula:number, nome:string, notaProva1:number, notaProva2:number, notaTrabalho:number){
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho

    }
public media():number{
    let calcular = this.notaProva1 + this.notaProva2 + this.notaTrabalho /3
     
}




}
