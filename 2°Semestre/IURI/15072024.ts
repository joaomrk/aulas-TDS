
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
