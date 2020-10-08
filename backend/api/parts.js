module.exports = app => {
    // estou exportando todas funções para fora
    //retorna um funçaõ arrow , receb como parametro app(instanci do express)
    // o app é passado para todas dependencias declaradas no then do consign
   const { existsOrError, minorOrError ,notExistsOrError} = app.api.validation//operador destructin

    const save = async(req, res) => {
        //res.send('user save')
        const part = { ...req.body }
        // é interseptado pelo bodyparser e clona para part(peça), espalhanado todos atributos
        //dentro do body, colocando dentro de outro objeto
        if(req.params.id) part.id = req.params.id
        // se req.params.id, estiver setado, pois serve para inserir ou alterar uma peça existente

        //if(!req.originalUrl.startsWith('/users')) user.admin = false
        //if(!req.user || !req.user.admin) user.admin = false

        try {          

            existsOrError(part.nome, 'Nome da peça não informada')            
            existsOrError(part.pesoliquido, 'Peso Liquido da peça não informada')
            existsOrError(part.pesobruto, 'Peso Bruto da peça não informada')
            minorOrError(part.pesoliquido,part.pesobruto,'Peso Líquido declarado é maior que Peso Bruto')
           
            const partFromDB = await app.db('parts') // db é a forma de acessar o knex
                .where({ nome: part.nome }).first() // para pegar só uma peça
            if(!part.id) { // a negação aqui é usuada caso haja interesse em fazer um update do id
                notExistsOrError(partFromDB, 'Peça já foi cadastrada')
            }
            
        } catch(msg) {
            return res.status(400).send(msg) // erro 400 do lado do servidor
        }


        if(part.id) {
            app.db('parts')
                .update(part)
                .where({ id: part.id }) // só se for um update
                //.whereNull('deletedAt')
                //.then(_ => res.status(204).send())
                //.catch(err => res.status(500).send(err))
        } else {
            app.db('parts')
                .insert(part)
                .then(_ => res.status(204).send()) // esta tudo certo
                .catch(e => res.status(500).send(e)) // significa que deu erro
        }
    } 

    const get = (req, res) => { 
        // pega todas partes do sistema
        app.db('parts')
            .select('id', 'nome', 'veiculo', 'pesoliquido', 'pesobruto')
            //.whereNull('deletedAt')
            .then(parts => res.json(parts))// se houver algum padrão na empresa
            // com nomes do bd com (_) ou nomenclatura padrão da empresa, nesse ponto deve-se fazer a conversão
            // aqui foi mantido o mesmo nome para simplificar a aplicação por tratar-se de um teste.
            .catch(e => res.status(500).send(e))
    }

    const getById = (req, res) => {
        app.db('parts')
            .where({ id: req.params.id })
            .first()
            .then(part => res.json(part))// se houver algum padrão na empresa
            // com nomes do bd com (_) ou nomenclatura padrão da empresa, nesse ponto deve-se fazer a conversão
            // aqui foi mantido o mesmo nome para simplificar a aplicação por tratar-se de um teste.
            .catch(e => res.status(500).send(e))
    }

        
    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('parts')
                .where({ id: req.params.id }).del()
            
            try {
                existsOrError(rowsDeleted, 'Peça não foi encontrado.')
            } catch(msg) {
                return res.status(400).send(msg)    
            }

            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getById,remove}
    // retorna um objeto com todas funções que queremos retornar
}