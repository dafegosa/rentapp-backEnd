// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

const Element = require('../models/element.model')

module.exports = {
  async create(req, res) {
    try {
      const element = await Element.create({ ...req.body })
      res.status(201).json({
        message: 'Nuevo elemento creado',
        element,
      })
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  },
}
