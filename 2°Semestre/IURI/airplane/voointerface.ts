import { Data } from "./data";

export interface VooInterface{
    constructor(numeroVoo:string, data: Data);
    proximoLivre():number;
    verifica(cadeira:number): boolean;
    ocupa(cadeira: number): boolean;
    vagas():number;
    getVoo():string;
    clone(): Voo;
}


export class Voo implements Voo{
    private passageiros: boolean[] = []
    public numeroVoo: string
    public data : Data
    constructor(numeroVoo:string, data: Data){
        this.passageiros = new Array(100).fill(false)
        this.numeroVoo = numeroVoo
        this.data = data
    }
     public proximoLivre(): number{
        for(let i = 0; i < this.passageiros.length; i++){
            if(!this.passageiros[i]){
                return i + 1
            }
        }
        console.log(`não existem cadeiras livres.`);
        return -1

    }
    public verifica(cadeira:number): boolean{
        return this.passageiros[cadeira - 1]
    }
    public ocupa(cadeira:number): boolean{
        if(!this.verifica(cadeira)){
        this.passageiros[cadeira - 1] = true
        return true
        } else {
        return false
        }
    }
    public vagas(): number {
        return this .passageiros.filter((ocupada)=> !ocupada).length
    }
}