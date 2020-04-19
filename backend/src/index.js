const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('<string_connection>', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

// app.use(cors({ origin: 'http://localhost:3000' }))	// Liberar acesso à URL específica
app.use(cors())	// Liberar acesso à todas as URLs
app.use(express.json())
app.use(routes)

app.listen(3333)

/**
 * Anotações
 * 
 * Métodos HTTP: GET, POST, PUT, DELETE
 * 
 * Tipos de parâmetros
 * Query Params: request.query (filtros, ordenação, paginação, ...)
 * Route Params: request.params (identificar um recurso na alteração ou remoção)
 * Body: request.body (dados para criação ou alteração de um registro)
 * 
 * MongoDB (não-relacional)
 */