
// sem o consign seria
// const user = require('../api/part)
// dentro do modulo exports post(user.save)

module.exports = app => {
    
    app.route('/parts')
        .post(app.api.parts.save) //(app(express).pastaApi.pastaPart.metodoSave)
        .get(app.api.parts.get)

    app.route('/parts/:id')
        //.put(app.api.parts.save) // não coloquei pois no enunciado não solicita alteração
        .get(app.api.parts.getById) // coloquei para facilitar a busca, caso o cadastro seja muito grande
        .delete((app.api.parts.remove))
    
}