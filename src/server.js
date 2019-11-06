const express = require("express"); //instanciando servidor
const mongoose = require("mongoose"); // ODM - Object Data Mapping
const routes = require("./routes");


const server = express(); //inicializando o servidor
server.use(express.json());
// Conexão com o banco de dados
mongoose.connect("mongodb://localhost:27017/projeto-bimestral-final", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true
});

server.use(routes);

server.listen(3333); //porta que vai ser utilizada