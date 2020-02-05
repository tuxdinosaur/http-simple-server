const express = require('express')
const app = express()

app.get('/', (request, response) => {
  console.log('GET /')
  response.status('200')
  response.send('GET /')
})

app.listen(8080, () => {
  console.log('APP listening')
})