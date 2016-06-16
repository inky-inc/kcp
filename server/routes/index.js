const fs = require('fs');
const path = require('path');

const app_paths = require('app_paths');

/////////////////////////
module.exports = function(app, express){
  // Static routes
  app.use(express.static( app_paths._DOC_ROOT ));
  // Module routes
  app.get('/', function(req, res){
  	res.send('Hi there');
  })    
}
