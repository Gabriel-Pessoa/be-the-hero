exports.up = function(knex) { // Método up responsável pela criação da tabela
    return  knex.schema.createTable('ongs',function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable(); // Como temos certeza que a uf sempre são dois caracteres, 
                                            //   podemos passa um parâmetro com o tamanho do texto 
    })
  
};

exports.down = function(knex) { // Caso eu precise voltar atrás, o método down deleta a tabela
    return  knex.schema.dropTable('ongs');
  
};
