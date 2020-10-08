const bodyParser = require('body-parser')
// interpreta o body da requisição / teexto/url etc...
const cors = require('cors')
// cors permite acessar de uma api de origens diferentes
// pois temos a backend e front end
// aqui vou usar o padrão do consign que facilitará a colocação 
//dos métodos e apis dentro de app(express)
// assim não precisa usar require para todos
module.exports = app => {
 // app é a instância do express

    app.use(bodyParser.json()) // para aplicar um middleware
    // interpreta a requisição que vem no corpo dela               .
    app.use(cors())
}