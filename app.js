const express = require('express')
const app = express()
const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'test') {
  app.use(require('morgan')('dev'))
  app.use(require('knex-logger')(require('./db')))
}

app.use(require('body-parser').json())

app.use('/auth', require('./routes/auth.routes'))
app.use('/api/users', require('./routes/users.routes'))

app.use((req, res, next) => {
  const status = 404
  const message = `Could not ${req.method} ${req.url}`
  next({ status, message })
})

app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  const message = err.message || `Something went wrong!`
  res.status(status).json({ status, message })
})

const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)
