delimiter //

create procedure AumentarSalario(
    in dep_id int,
    IN percentual decimal(5,2)
)
begin
    update cargos
    set salario = salario + (salario * (percentual / 100))
    where departamentoId = dep_id;
end //
delimiter; 