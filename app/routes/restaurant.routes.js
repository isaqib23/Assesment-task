module.exports = app => {
    const tutorials = require("../controllers/restaurant.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/create", tutorials.create);

    // Retrieve all Tutorials
    router.get("/all", tutorials.findAll);


    app.use('/api/restaurants', router);
};
