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
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }

    res.status(200).send({ 
        error: "false",
        mensagem: 'O pedido foi criado',
        pedidoCriado: pedido
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
