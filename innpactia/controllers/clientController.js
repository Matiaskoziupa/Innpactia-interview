const db = require('../models')

//Db main
const Client = db.clients
const Review = db.reviews

const addClient = async (req, res) => {

    let info = {
        user: req.body.user,
        phone: req.body.phone,
        description: req.body.description,
    }

    const client = await Client.create(info)
    res.status(200).send(client)
    console.log(client)

}

const getAllClients = async (req, res) => {

    let clients = await Client.findAll({})
    res.status(200).send(clients)

}

const getOneClient = async (req, res) => {

    let id = req.params.id
    let client = await Client.findOne({ where: { id: id }})
    res.status(200).send(client)

}


module.exports = {
    addClient,
    getAllClients,
    getOneClient
}