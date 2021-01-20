const db = require("../models");
const Restaurant = db.restaurants;

// Create and Save a new Tutorial
exports.create = (req, res) => {
// Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Tutorial
    const restaurant = new Restaurant({
        name: req.body.name,
        lat: req.body.lat,
        lng: req.body.lng,
        address: req.body.address
    });

    // Save Tutorial in the database
    restaurant
        .save(restaurant)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the restaurant."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Restaurant.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving restaurant."
            });
        });
};
