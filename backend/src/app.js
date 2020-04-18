const express = require('express')
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes') // "./" refere-se a um arquivo, e não a um pacote

const app = express()

app.use(cors());
app.use(express.json()) // antes de todas as requisições converter o JSON em um objeto
app.use(routes)
app.use(errors())

module.exports = app;


/*
* http://localhost:3333/users -> isso é uma rota
* e 'users' é um recurso, estou querendo acessar o recurso de usuário, listar todos os usuários por exemplo
*/

/** Método HTTP
 * 1.Get : é método que busca ou lista uma informação no back-end (quando utilizamos uma rota e 
 * damos o enter o browser sempre executa o método 'get') 
 * 2.Post: Criar uma informação no back-end (Criar um novo usuário por exemplo), no lugar do get colocamos o post
 * 3.Put: Altera informação no back-end
 * 4.Delete: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params:Parâmetros nomeados enviados na rota após "?" serve geralmente para (Filtros, Paginação). 
 * Ex1:http://localhost:3333/users?name=Gabriel ou http://localhost:3333/users?name=Gabriel&idade=24 
 * 
 * Route Params: ParÂmetro para identificar recursos
 * Ex:" /users/:id" esse id gerado , pode ser a partir do número 1, eu consigo acessar aqui:
 * "http://localhost:3333/users/1"
 */

/**
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 * app.get('/users', (request, response) =>{ 
 * O request guarda todos os dados através da requisição enviada pelo usuário
 * O response o responsável por retornar um resposta para o usuário
 * código: " app.get('/users', (request, response) =>{
   const params = request.query;

   console.log(params); "
 */
