const router = require("express").Router()
const { isAuthenticated } = require('./../middlewares/jwt.middleware')

const Coaster = require('./../models/Coaster.model')

router.get("/getAllCoasters", (req, res) => {

    Coaster
        .find()
        .select('title description imageUrl owner')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get("/getOneCoaster/:coaster_id", (req, res) => {

    const { coaster_id } = req.params

    Coaster
        .findById(coaster_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/saveCoaster", isAuthenticated, (req, res) => {

    const coaster = { ...req.body, owner: req.payload._id }

    Coaster
        .create(coaster)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router