const { connect, disconnect } = require('./db')
const dotenv = require('dotenv').config()
const app = require('./app')

const port = process.env.PORT || 8000

connect()

app.listen(port, () => {
  console.log(`Successfully running at http://localhost:${port}`)
})
