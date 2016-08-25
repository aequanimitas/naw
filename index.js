//var knex = require('knex')({
//  client: 'pg',
//  connection: {
//    host : '127.0.0.1',
//    user : 'naw_user',
//    password : 'naw_pass',
//    database : 'naw_db'
//  },
//  migrations: {
//    tableName: 'migrations'
//  }
//});

var args = process.argv.slice(2);

var hasShortOption = function(x) {
  return x.indexOf('-') === 1;
};

var hasLongOption = function(x) {
  return x.lastIndexOf('--') === 0;
};

var options = function(fn) {
  return args.filter(fn);
}

var shortOptions = options(hasShortOption);
var longOptions = options(hasLongOption);

console.log('shortOptions:', shortOptions);
console.log('longOptions:', longOptions);

//knex('naw_item').insert({naw_name: args[0], added: knex.raw('now()')}).then(function(e) {
//  console.log(e);  
//}, function(e) {
//  console.log(e);
//});
