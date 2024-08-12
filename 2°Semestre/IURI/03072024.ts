import { log } from "console"

class game{
    title : string
    gender : string
    ageRate : number

        constructor(title:string,gender:string,ageRate:number){
            this.title = title
            this.gender = gender
            this.ageRate = ageRate
        }
     getdetalhes(): void {
        console.log(`
        Título: ${this.title}
        Gênero: ${this.gender}
        Classificação indicativa: ${this.ageRate}
        `);
        }
        
      
        super(titleNovo: string,genderNew: string,ageRatenew: number){
            this.title = titleNovo
            this.gender = genderNew
            this.ageRate = ageRatenew

}
        
    
    }