'use strict'
const KNEX =require('knex');

module.exports = KNEX({
client : 'mysql',
connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba',
    port: 3306
}
});
