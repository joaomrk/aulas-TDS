let ask = require('readline-sync')

class Produto {
    nome : string 
    preco : number
    marca : string
    descricao : string
    valorVenda : number
        constructor(
            nome : string,
            preco : number,
            marca : string,
            descricao : string,
            valorVenda : number
        ){
            this.nome = nome 
            this.preco = preco
            this.marca = marca
            this.descricao = descricao
            this.valorVenda = valorVenda
        }

        setProduto() : void{
            let nomeUpdate = ask.question('Nome do produto: ')
            let precoUpdate = ask.question('Preço do produto: ')
            let marcaUpdate = ask.question('Marca do produto: ')
            let descricaoUpdate = ask.question('descrição do produto: ')
            let valorVendaUpdate = ask.question('Valor de venda: ')
            this.nome = nomeUpdate
            this.preco = precoUpdate
            this.marca = marcaUpdate
            this.descricao = descricaoUpdate
            this.valorVenda = valorVendaUpdate
        }
        setLucro() : void{
            (this.valorVenda - this.preco)
          }
          
          getProduto(){
            console.log(`
            nome: ${this.nome}
            preço: ${this.preco}
            marca: ${this.marca}
            descrição: ${this.descricao}
            valor de venda: ${this.valorVenda}
            `);
          }
        }
        
        class venda {
            produto : string
            quantidade : number
            valorTotal : number
            data : Date
            constructor(
                produto : string,
                quantidade : number,
                valorTotal : number,
                data : Date
                ){
                    this.produto = produto
                    this.quantidade = quantidade
                    this.valorTotal = valorTotal
                    this.data = data
                }
                getVenda(){
                  
                
                }
            }
        
    