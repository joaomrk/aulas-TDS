

--usa se pra calcular o valor medio de dois valores
select avg (o que tu quer) as valormedio from tuatabela
--usa se pra calular duas tabelas ao mesmo tempo
select tuatabela.coisa1, tuatabela.coisa2, tuatabela.coisa3 inner join 


select clientes.nome, count(pedidos.idpedidos) as total_Pedidos  from clientes inner join pedidos on clientes.idCliente = pedidoos.idCliente group by clientes.nome;