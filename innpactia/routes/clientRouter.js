//import controllers

const clientController = require('../controllers/clientController.js')

//router

const router = require('express').Router()

router.post('/addClient', clientController.addClient)

router.get('/allClients', clientController.getAllClients)

router.get('/:id', clientController.getOneClient)



module.exports = router