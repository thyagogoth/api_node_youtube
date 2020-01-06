const express = require('express')
const router = express.Router()

/*
* Lista os pedidos cadastrados
*/
router.get('/', (req, res, next) => {
    res.status(200).send({ 
        error: "false",
        mensagem: '/ GET'
    })
})

/*
* Exibe os dados de um pedido cadastrado
*/
router.get('/:id_pedido', (req, res, next) => {
    res.status(200).send({ 
        error: "false",
        mensagem: '/ GET {id_pedido}'
    })
})

/*
* Cadastra um novo pedido
*/
router.post('/', (req, res, next) => {
    res.status(200).send({ 
        error: "false",
        mensagem: '/ POST'
    })
})

/*
* Exclui um pedido 
*/
router.delete('/:id_pedido', (req, res, next) => {
    res.status(200).send({ 
        error: "false",
        mensagem: "/ DELETE"
    })
})


module.exports = router
