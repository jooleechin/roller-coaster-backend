module.exports = name => {
  const express = require('express')
  const router = express.Router()
  const Controller = require(`../controllers/${name}.controller`)

  router.get('/', Controller.index)
  router.get('/:id', Controller.exists, Controller.show)
  router.post('/', Controller.create)
  router.put('/:id', Controller.exists, Controller.update)
  router.delete('/:id', Controller.exists, Controller.destroy)

  return router
}
