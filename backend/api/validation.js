module.exports = app => {
    function existsOrError(value, msg) {
        // ou existe ou gera um erro
        if(!value) throw msg
        // teste para saber se o valor não esta setado
        if(Array.isArray(value) && value.length === 0) throw msg // lança a mensagem recebida
        // se o valor for array e vazio, para o banco de dados, não conseguiu obter no banco de dados
        if(typeof value === 'string' && !value.trim()) throw msg
        // se o tipo for vazio, ou espaços vazios
    }
    
    function notExistsOrError(value, msg) {
        // quero que não exista
        try {
            existsOrError(value, msg)// tem algum problema para esse caso
        } catch(msg) {
            return
        }
        throw msg
    }
    
    function equalsOrError(valueA, valueB, msg) {
        if(valueA !== valueB) throw msg
    }
   

    function minorOrError(valueA, valueB, msg) {
        if( valueA > valueB) throw msg
    }
    //typeof valueA === 'float' && typeof valueA === 'float' &&

    return { existsOrError, notExistsOrError, equalsOrError,minorOrError}
}