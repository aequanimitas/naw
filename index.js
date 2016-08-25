var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'naw_user',
    password : 'naw_pass',
    database : 'naw_db'
  },
  migrations: {
    tableName: 'migrations'
  }
});

var args = process.argv.slice(2);

knex('naw_item').insert({naw_name: args[0], added: knex.raw('now()')}).then(function(e) {
  console.log(e);  
}, function(e) {
  console.log(e);
});
