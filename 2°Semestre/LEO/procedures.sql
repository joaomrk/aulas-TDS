delimiter //

create procedure AumentarSalario(
    in depId int,
    in percentual decimal(5,2)
)
begin 
    update cargos
    set salario  = salario + (salario * (percentual / 100))
    where departamentoId = dep_id;
end //
delimiter; 


delimiter //

create procedure empregados(
    in empregadoId int auto_increment,
    in nomeEmpregado varchar(100),
    in salarioEmpregado decimal(6,2)
)
begin
    insert into empregados (nomeEmpregado, salarioEmpregado) values ('joaoMNS',2000.00),('leo',4.59);
    end //
delimiter;
