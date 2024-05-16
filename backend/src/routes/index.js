const router = require('express').Router()
const TodosRouter = require('./todos/todosRouter')

router.use('/todos', TodosRouter)

module.exports = router
