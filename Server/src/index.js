const server = require('./app')

const port = 3001;
server.listen(port, ()=>{
  console.log('Servidor funcionando en el puerto: ' + port);
});