use desafiojoao;

create table Produtos(
	idProduto int auto_increment PRIMARY key,
    nome varchar(100) not null,
    categoria varchar(100),
    precoCompra float,
    precoVenda float,
    dataCompra varchar(10),
    pesoKg varchar(5),
    dimensaoM2 varchar(10),
    localizacao varchar(2)
)

("falke semi syn 20w40 20l","balde",200.00,350.00,2024-06-12,20,0.3,"A1")
("lubrax semi syn 75w80 20l","balde",250.00,450.00,2024-07-10,20,0.3,"B3")
("filtro mann WK 940/4","unidade",30.00,50.00,2024-03-29,0.5,0.1,"C2")
("falke graxa chassis II 6/1kg","caixa",70.00,100.00,2024-04-31,6,0.3,"A2")
("lubrax unitractor 10w30 20l","balde",300,500,2023-12-30,20,0.3,"B2")
("falke syn 20w30 20l","balde",400,700,2024-01-20,20,0.3,"A1")
("filtro mann W 1040/1","unidade",20,50,2024-03-14,0.3,0.2,"C2")
("falke hidraulico VG 68 20l","balde",200,360,2024-02-26,20,0.3,"B1")

insert ignore into Produtos(nome, categoria, precoCompra, precoVenda, dataCompra, pesoKg, dimensaoM2,localizacao )
 values ("falke semi syn 20w40 20l","balde",200.00,350.00,2024-06-12,20,0.3,"A1")
("lubrax semi syn 75w80 20l","balde",250.00,450.00,2024-07-10,20,0.3,"B3")
("filtro mann WK 940/4","unidade",30.00,50.00,2024-03-29,0.5,0.1,"C2")
("falke graxa chassis II 6/1kg","caixa",70.00,100.00,2024-04-31,6,0.3,"A2")
("lubrax unitractor 10w30 20l","balde",300,500,2023-12-30,20,0.3,"B2")
("falke syn 20w30 20l","balde",400,700,2024-01-20,20,0.3,"A1")
("filtro mann W 1040/1","unidade",20,50,2024-03-14,0.3,0.2,"C2")
("falke hidraulico VG 68 20l","balde",200,360,2024-02-26,20,0.3,"B1")

use desafiojoao;

insert ignore into Produtos(nome, categoria, precoCompra, precoVenda, dataCompra, pesoKg, dimensaoM2,localizacao )
 values ("falke semi syn 20w40 20l","balde",200.00,350.00,2024-06-12,20,0.3,"A1"),
("lubrax semi syn 75w80 20l","balde",250.00,450.00,2024-07-10,20,0.3,"B3"),
("filtro mann WK 940/4","unidade",30.00,50.00,2024-03-29,0.5,0.1,"C2"),
("falke graxa chassis II 6/1kg","caixa",70.00,100.00,2024-04-31,6,0.3,"A2"),
("lubrax unitractor 10w30 20l","balde",300,500,2023-12-30,20,0.3,"B2"),
("falke syn 20w30 20l","balde",400,700,2024-01-20,20,0.3,"A1"),
("filtro mann W 1040/1","unidade",20,50,2024-03-14,0.3,0.2,"C2"),
("falke hidraulico VG 68 20l","balde",200,360,2024-02-26,20,0.3,"B1"),
("falke graxa chassis II","tambor",3000,5000,2024-03-04,200,1.3,"D1"),
("falke graxa mp2 blue","tambor",4400,6000,2024-05-20,200,1.3,"D1");

--adicionando tabela sme estoque e colocando o valor de boolean nela
-- se colocar default no fim ele altera todas a tabela para o valor que o default determinar
alter table Produtos add semEstoque boolean default true;



--fazer com que todos os produtos estejam fora de estoque exceto o id2
update Produtos set semEstoque = false where idProduto != 2;
--teste que eu fiz antes sem descobrir o update 
insert into Produtos (idProduto,semEstoque) values ()
select * from Produtos order by idProduto asc inner join Produtos.semEstoque limit 5;


select nome, semEstoque from Produtos order by id asc order by semEstoque limit 5;


---DESAFIO 2 LIVRARIA

create table Livros (
--nome/ autor/ genero/ quantpag/ editora/ data da primeira publicação/ personagens
idLivro int auto_increment PRIMARY key,
nome varchar(100), 
autor varchar(100), 
genero varchar(100), 
quantPag number, 
editora varchar(100), 
primeiraPub varchar(10), 
personagens varchar(100)
)
insert ignore into Livros(nome, autor, genero, quantPag, editora, primeiraPub, personagens) values 
("senhor dos aneis","J.R.R. Tolkien"," Literatura fantástica",)
()
()
()
()
()
()
()
()
()
()



select nome, semEstoque
from Produtos
order by id asc
order by semEstoque
limit 5;


