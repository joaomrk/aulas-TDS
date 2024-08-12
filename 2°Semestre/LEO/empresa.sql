use empresajoao;


create table departamentos (departamentoId int AUTO_INCREMENT PRIMARY KEY, nome varchar(50)not null);
create TABLE empregados (empregadosId int AUTO_INCREMENT PRIMARY KEY, nome varchar(50) not null, salario decimal(10,2)not null,departamentosId int, FOREIGN KEY(departamentoId) REFERENCES departamentos(departamentoId));


use empresajoao;

insert into departamentos (nome) values ('vendas'), ('marketing'), ('TI'),('Recursos Humanos');

insert into empregados(nome, salario, departamentoId) values 
('susana viera'),
 ('nelson motta'),
  ('tim maia'),
  ('ed motta'),
  ('kelly rowland'),
  ('kljay'),
  ('brizolla'),
  ('nelly')
select nome, salario from empregados
 where salario > (select avg (salario) from emoregados);

 alter table departamentos add localizacao varchar(50);

 update departamentos set localizacao = 'sao paulo' where nome = 'vendas'

 select empregados.nome, de


--operador IN o operador IN é usado para usar pesquisa em alguma tabela

 select nome from departamentos where nome like 'a%'

 select nome from departamentos where nome in (1,3)

--operador ANY vai pesquisar todos os parametros que existirem

 select nome, salario from empregados where salario > (select avg(salario) from empregados);

update departamentos set localizacao = 'sao paulo' where 

select nome, salario from empregados where salario > all(select salario from empregados)

create table cargos(
  cargos_id int AUTO_INCREMENT PRIMARY key,
  titulo varchar(50) not null,
  departamentoId int,
  salario decimal(10,2) not null,
  foreign key (departamentoId) REFERENCES departamentos (departamentoId)
);

update empregados set titulo = 'Gerente' where nome = 'susana vieira'

update empregados set titulo = 'Assistente' where nome = 'nelson motta',

update empregados set titulo = 'Engenheiro' where nome = 'tim maia',

update empregados set titulo = 'Estagiário' where nome = 'ed motta',

update empregados set titulo = 'Desenvolvedor' where nome = 'kelly rowland',

update empregados set titulo = 'Analista' where nome = 'kljay',

update empregados set titulo = 'Engenheiro' where nome = 'brizolla'

update empregados set titulo = 'Gerente' where nome = 'nelly'

insert into cargos(titulo, departamentoId, salario) values 
('Gerente',1,8000.00),
('Assistente',1,4000.00),
('Analista',2,4500.00),
('Desenvolvedor',3,6000.00),
('Engenheiro',3,7000.00),
('Assistente',4,3500.00),
('Analista',2,4600.00),
('Estagiário',1,2000.00);

clausula having 
a clausula having é usada para filtrar os resultados de uma consulta de agrupamento (group by) com base em uma condição especificada. é similar à clausula where 


select departamentos.nome, avg(cargos.salario) from empregados join cargos on empregados.departamentoId = cargos.departamentoId
join departamentos on empregados.departamentoId = departamentos.departamentoId group by departamentos.nome having avg(cargos.salario) > 5000.00

select departamentoId , sum(cargos.salario) from empregados join cargos on empregados.departamentoId = cargos.departamentoId join departamentos
on empregados.departamentoId = departamentos.departamentoId group by departamentos.nome having sum(cargos.salario)

insert into empregados(cargo,departamentoId) values 
('Gerente',1),
 ('Assistente',1),
  ('Engenheiro',3),
  ('Estagiário',1),
  ('Desenvolvedor',3),
  ('Analista',2),
  ('Engenheiro',3),
  ('Gerente',1)

 DELETE FROM empregados WHERE empregados.empregadosId = 2

 
1) Escreva uma consulta SQL para selecionar o departamento_id e a soma dos salários para cada departamento. Filtre os departamentos onde a soma total dos salários é maior que R$ 12.000,00.
use empresajoao;

select departamentoId , sum(cargos.salario) as total_salario from cargos group by departamentoId having sum(salario)>12000.00

-- select clientes.nome, count(pedidos.idpedidos) as total_Pedidos  from clientes inner join pedidos on clientes.idCliente = pedidoos.idCliente group by clientes.nome;

2) Escreva uma consulta SQL para selecionar o titulo e o número de empregados para cada título. Filtre os títulos onde há mais de 2 empregados.

select titulo, count(empregadosId) as numero_empregados from empregados group by titulo having count (empregadosId) > 2;

3) Escreva uma consulta SQL para selecionar o departamento_id e a média dos salários para cada departamento. Filtre os departamentos onde a média salarial é maior que R$ 4.500,00.
select departamentoId, avg(salario) as media_salario 
from cargos 
group by departamentoId 
having avg(salario) > 4500.00;

4) Escreva uma consulta SQL para selecionar o departamento_id e o maior salário para cada departamento. Filtre os departamentos onde o maior salário é superior a R$ 6.000,00.
SELECT departamento_id, MAX(salario) AS maior_salario
FROM cargos
GROUP BY departamento_id
HAVING MAX(salario) > 6000.00;

5) Escreva uma consulta SQL para selecionar o departamento_id e o menor salário para cada departamento. Filtre os departamentos onde o menor salário é superior a R$ 2.500,00.  
select departamentoId, min (salario) as menor_salario
from cargos 
group by departamentoId
having min(salario) > 2500.00