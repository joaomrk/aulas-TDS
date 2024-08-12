let reader = require('readline-sync')


class jogo{
    protected tituloJogo: string
    protected generoJogo: String
    protected classficacaoEtariaJogo: Number
    

        
            public removeGame(): void {
                console.log(this.jogo);
                let titleRemove = reader.question("Qual o título deseja excluir:")
                this.jogo = this.jogo.filter(objJogo => objJogo.titleGame)
            
        }

        constructor(tituloNovo: String,generoNovo: String,classficacaoEtariaNovo: number){
            this.tituloJogo = tituloNovo
            this.generoJogo = generoNovo
            this.classficacaoEtariaJogo = classficacaoEtariaNovo


            public getDetalhes(): void {


            }


            public setDetalhes(): void{
                let tituloAtualizar = reader.question("Insira o titulo do jogo:")
                let generoAtualizar = reader.question("Insira o genero do jogo:")
                

            }
        }
}