const express = require('express')
const router = express.Router()
const {getItems, getItem, createItems, updateItems, deleteItems} = require('../controllers/libros')

router.get('/', getItems)
router.post('/', createItems)
router.patch('/', updateItems)
router.delete('/', deleteItems)

module.exports = router