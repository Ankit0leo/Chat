const express = require('express')
const app = express()
const port = 3000

app.get('/me', (req, res) => {
  res.send('Ankit')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})