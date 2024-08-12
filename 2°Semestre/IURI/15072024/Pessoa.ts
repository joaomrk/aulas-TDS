export{}


let ask = require('readline-sync')

export interface PessoaInterface{
    nome : string
    sobrenome: string
    nomeDoPai: string
    nomeDaMae: string
    numeroRg: number
    numeroCpf: number
    dataDeNascimento: number
}
export class Pessoa implements PessoaInterface{
    nome : string
    sobrenome: string
    nomeDoPai: string
    nomeDaMae: string
    numeroRg: number
    numeroCpf: number
    dataDeNascimento: number

    constructor(nomeNovo:string,sobrenomeNovo:string, paiNovo: string,maeNovo: string, rgNovo: number, cpfNovo:number,nascimentoNovo:number){
        this.nome = nomeNovo
        this.sobrenome = sobrenomeNovo
        this.nomeDoPai = paiNovo
        this.nomeDaMae = maeNovo
        this.numeroRg = rgNovo
        this.numeroCpf = cpfNovo
        this.dataDeNascimento = nascimentoNovo
    }
    
public getPessoa(): void{
    console.log(`
        nome:${this.nome}
        sobrenome:${this.sobrenome}
        nome do pai:${this.nomeDoPai}
        nome da mae:${this.nomeDaMae}
        rg:${this.rg}
        cpf:${this.cpf}
        data de n
        ascimento:${this.dataDeNascimento}
    `)
    public setPessoa():void{
        let nomeUp = ask.question("insira o nome da pessoa")
        let sobrenomeUp = ask.question("insira o sobrenome")
        let nomeDoPaiUp = ask.question("insira o nome do pai")
        let nomeDaMaeUp = ask.question("insira o nome da mae")
        let numeroRgUp = ask.question("insira o numero de rg")
        let numeroCpfUp = ask.question("insira o numero de cpf")
        let dataDeNascimentoUp = ask.question("insira a data de nascimento")
    
        this.nome = nomeUp
        this.sobrenome = sobrenomeUp
        this.nomeDoPai = nomeDoPaiUp
        this.nomeDaMae = nomeDaMaeUp
        this.numeroRg = numeroRgUp
        this.numeroCpf = numeroCpfUp
        this.dataDeNascimento = dataDeNascimentoUp
    }
    
    public calculeIdade():void{
    let anoAtual = ask.questionInt("em que ano estamos?")
    let idade = anoAtual - this.dataDeNascimento
    console.log(`voce tem ${idade} anos`)
    if(idade<18)
    
    }
    
    
    
    }

}
