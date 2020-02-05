//Middlewares
//Reciben request, response, next

const express = require('express')
const app = express()

app.use((request, response, next) => {
  console.log('MIDDLEWARE APP')
  next()
})

//:id nombre de la variable, placeholder
app.get('/koder/:id', (request, response) => {
  console.log('Koder ID: ', request.params.id)
  response.send(`Koder ${request.params.id}`)
})

app.get('/middlewares', (request, response, next) => {
  console.log('MIDDLEWARE 1')
  next()
}, (request, response, next) => {
  console.log('MIDDLEWARE 2')
  next()
}, (request, response) => {
  response.send('FIN')
})

app.listen(8080, () => {
  console.log('APP listening')
})