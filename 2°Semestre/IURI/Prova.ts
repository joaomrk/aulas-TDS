let reader = require("readline-sync")

export interface Prova{
    constructor(gabarito: Array<string>);
    respostaAluno(resposta:string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva:Prova): number;
}
export class Prova{
    private respostas: string[] = []
    private gabarito: string[] = []

    constructor(gabarito: string[]){
        this.gabarito = ['A','B','C','A','C','C','B','D','A','C','A','D','A','B','A','C','C','B','B','A','D']
    }
    public respostaAluno(resposta: string): void{
        this.respostas.push(resposta.toUpperCase())
    }
    public acertos():number{
        return this.respostas.filter((resposta,indice)=> resposta === this.gabarito[indice]).length
    }
    //verificar a eficacia desse aqui

    public nota(): number{
        const acertos = this.acertos()
        return acertos * 0.5 + (15 - acertos)
    }
    public maior(outraProva: Prova): number{
        const notaAtual = this.nota()
        const outraNota = outraProva.nota()

        if(notaAtual > outraNota){
            return notaAtual 
        } else {
            return outraNota
            
        }
    
    }
}