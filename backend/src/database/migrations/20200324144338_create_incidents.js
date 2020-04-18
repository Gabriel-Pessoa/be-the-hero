
exports.up = function(knex) {
    return  knex.schema.createTable('incidents',function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); // Conceito de relacionamento de SQL

        table.foreign('ong_id').references('id').inTable('ongs'); // Conceito de chave estrangeira, precisa ser um id que foi cadastro dentro de ong

    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');  
};
