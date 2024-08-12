let reader = require("readline-sync")

import { Data } from "./data"
import { VooInterface } from "./voointerface"

export class Voo{
    numeroVoo: string 
    data : Data
    lugares: boolean [] = []
    constructor(numeroVoo: string, data: Data, lugares: boolean []){
        this.numeroVoo = numeroVoo
        this.data = data
        this.lugares = lugares
        for(let i = 0; i < 100; i ++){
            this.lugares[i] = false
        }
        public proximoLivre(): number{
            let assentoLivre: number
            for(let assento of this.lugares){
                if(assento){
                    assentoLivre = this.lugares.indexOf(assento)
                    return assentoLivre
                }
            }

        }
        if assentoLivre === 101
    }


}
