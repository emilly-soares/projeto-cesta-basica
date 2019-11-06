const { Router } = require('express'); //pegar apenas o express
const UserController = require("./controllers/UserController");
const CommerceController = require("./controllers/CommerceController");
const MonthlyQuoteController = require("./controllers/MonthlyQuoteController");
const routes = Router();

// GET, PUT, DELETE E POST
routes.post("/users", UserController.store); //salvar
routes.get("/users", UserController.index); //listar
routes.delete("/users/:id", UserController.destroy); //excluir
routes.put("/users/:id", UserController.update); //alterar

routes.post("/commerces", CommerceController.store); //salvar
routes.get("/commerces", CommerceController.index); //listar
routes.delete("/commerces/:id", CommerceController.destroy); //excluir
routes.put("/commerces/:id", CommerceController.update); //alterar

routes.post("/MonthlyQuotes", MonthlyQuoteController.store); //salvar
routes.get("/MonthlyQuotes", MonthlyQuoteController.index); //listar
routes.delete("/MonthlyQuotes/:id", MonthlyQuoteController.destroy); //excluir
routes.put("/MonthlyQuotes/:id", MonthlyQuoteController.update); //alterar
module.exports = routes;
