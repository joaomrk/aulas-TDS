use livrariajoaom;

CREATE TABLE clientes(
	-- coluna / tipo de dado / restrição,
    idClientes int primary key,
    nome varchar(100),
    telefone varchar(100)
);

alter table clientes modify email text;

create table if not exists clientes (
    idClientes int primary key,
    nome varchar(100),
    telefone varchar(100)
)

alter table clientes add email varchar(100);

alter table clientes change column email emailCliente varchar(255);

alter table clientes drop column telefone;

alter table clientes rename to Clientes;

drop table Clientes;

insert ignore into Clientes (idClientes,nome , emailCliente) 
 values (1,'joao silva','joao.silva@email.com'),
(2,'joao marco','joao.marco@email.com'),
(3,'joao alberto','joao.alberto@email.com'),
(4,'joao miguel','joao.miguel@email.com'),
 (5,'joao maria','joao.maria@email.com');

update Clientes 
set email = 'novo.email@email.com' 
where idClientes = 1; -- condição

delete from clientes where idClientes = 1;

select idClientes, nome, email from clientes;

select * from Clientes where idClientes = 3;

select idCliente, nome, email from Clientes order by nome asc; -- ou desc

SELECT nome from clientes where emailCliente = 'joao@email.com' order by idCliente asc;

select * from Clientes limit 3;

create table Pedidos (
    idPedido int auto_increment primary key,
    idCliente int,
    numeroPedido varchar(50),t
    valorPedido decimal(10,2),
    dataPedido date,
    foreign key (idCliente) references Clientes(idCliente)  
);

--inserir na tabela 
insert into Pedidos (idCliente, numeroPedido, valorTotal, dataPedido) values (1,'PED-001',150.73,'2024-07-12'),
(2,'PED-002',250.65,'2024-07-13'),
(3,'PED-003',340.33,'2024-07-14'), 
(4,'PED-004',12.45,'2024-07-13'),
(5,'PED-005',23.50,'2024-07-11');

--selecionar a soma da coluna
select sum(valorTotal) as valor_total_pedidos from Pedidos; 

--selecionar o valor medio da coluna no paranteses
select avg(valorTotal) as valor_medio_pedidos from Pedidos;

--selecionar o maximo da coluna que esta no parenteses
select max(numeroPedido) as pedido_com_numero_mais_alto from Pedidos;

--selecionar o minimo de cada 
select min(numeroPedido) as pedido_com_numero_mais_baixo from Pedidos;

--consulta com junção de tabelas

    SELECT Clientes.idCliente, Clientes.nome, Clientes.email, Pedidos.numeroPedido from Clientes inner join Pedidos on Clientes.idCliente = Pedidos.idCliente;

select Clientes.idCliente, Clientes.nome, Pedidos.numeroPedido from Clientes left join Pedidos on Clientes.idCliente = Pedidos.idCliente;

select Clientes.idCliente, Clientes.nome, Pedidos.numeroPedido, Pedidos.valorTotal from Clientes inner join Pedidos on Clientes.idCliente = Pedidos.idCliente where Pedidos.valorTotal > 200;


-- conta o numero total de pedidos
select count(*) from Pedidos;

SELECT Clientes.nome, count(Pedidos.idPedido) AS total_Pedidos FROM Clientes inner join Pedidos on Clientes.idCliente = Pedidos.idCliente group by Clientes.nome;

select Clientes.nome, sum(Pedidos.valorTotal) from 

create table if not exists produtos(
    idProduto int auto_increment primary key
)
--como alterar colunas de uma tabela
alter TABLE Produtos CHANGE COLUMN peso pesoKg(tipar);

--adicionando tabela sme estoque e colocando o valor de boolean nela
-- se colocar default no fim ele altera todas a tabela para o valor que o default determinar
alter tableo Produtos add semEstoque boolean default true;
