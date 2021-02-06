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

  async listOwnElements(req, res) {
    try {
      const thisId = req.body.id
      const elements = await Element.find({ owner: thisId })
      res.status(200).json({
        message: 'Elements found',
        data: elements,
      })
    } catch (err) {
      res.status(400).json({ message: 'Email not found', data: err })
    }
  },
}
