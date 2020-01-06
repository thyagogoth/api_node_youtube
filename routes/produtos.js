const express = require('express')
const router = express.Router()

/*
* Lista os produtos cadastrados
*/
router.get('/', (req, res, next) => {
    res.status(200).send({ 
        error: "false",
        mensagem: '/ GET'
    })
})

/*
* Exibe os dados de um produto cadastrado
*/
router.get('/:id_produto', (req, res, next) => {
    res.status(200).send({ 
        error: "false",
        mensagem: '/ GET {id_produto}'
    })
})

/*
* Cadastra um novo produto
*/
router.post('/', (req, res, next) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }

    res.status(200).send({ 
        error: "false",
        mensagem: 'O produto foi cadastrado',
        produtoCriado: produto
    })
})

/*
* Altera o cadastro de um produto
*/
router.patch('/:id_produto', (req, res, next) => {
    res.status(200).send({ 
        error: "false",
        mensagem: '/ PATCH'
    })
})

/*
* Exclui um produto 
*/
router.delete('/:id_produto', (req, res, next) => {
    res.status(200).send({ 
        error: "false",
        mensagem: "/ DELETE"
    })
})

module.exports = router
