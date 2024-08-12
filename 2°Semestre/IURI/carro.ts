import { kMaxLength } from "buffer"

let ask = require('readline-sync')
//a interface é o modelo a seguir com a classe
export interface CarroInterface{
    tanque : number
    km: number
    marca: string

constructor(tanqueCarro: number, kmCarro : number,marcaCarro : string){
    this.tanque= tanqueCarro
    this.km = kmCarro
    this.marca = marcaCarro




}
    getCarro(): void
    setCarro(): void
    andar(): void{
       let distancia = ask.questionInt()
        
    }
    obterGasolina(): number
    addGasolina(): void

}


//classe carro vai para garagem
export class Carro{
    nome : string
    modelo: string
    consumo:number
    acelerar:number
    gasolina:number


        constructor(
            nome : string,
            modelo: string,
            consumo:number,
            acelerar:number,
            gasolina:number
            ){
                this.nome = nome
                this.modelo = modelo
                this.consumo = consumo
                this.acelerar = acelerar
                this.gasolina = gasolina
        }

        andar(){
            this.acelerar = 

          
        }
        obterGasolina(){
           console.log(`Você tem ${this.gasolina} litros restantes`);
        }
        adicionarGasolina(){
            let frentista = ask.question(`Quanto de gasolina devo colocar?`)
            this.gasolina += frentista
        }
}
   