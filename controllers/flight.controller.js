const Flight = require('../models/Flight');

exports.createFlight = function (req, res,next) {
    let flight = new Flight(req.body);
    flight.save()
        .then(flight => {
            res.status(200).json({'flight': 'flight added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new flight failed');
        });
};

exports.showFlights = function (req, res,next) {
    Flight.find(function(err, flights) {
        if (err) {
            console.log(err);
        } else {
            res.json(flights);
        }
    });
};

exports.showFlight = function (req, res,next) {
    let id = req.params.id;
    Flight.findById(id, function(err, flight) {
        res.json(flight);
    });
};

exports.deleteFlight = function (req, res,next) {
    Flight.findById(req.params.id, function (err,flight) {
        if (!flight)
            res.status(404).send("data is not found");
        else
            flight.delete().then(flight => {
                res.json('Flight deleted!');
            })
                .catch(err => {
                    res.status(400).send("Delete is not possible");
                });
    });
};


exports.addTourist = function (req, res,next) {

    Flight.findById(req.params.id, function(err, flight) {

        if (!flight)
            res.status(404).send("data is not found");
        else
            flight.touristsList.push(req.body.tourist);

        flight.save().then(flight => {
            res.json('Flight updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
};
exports.deleteTourist = function (req, res,next) {

    Flight.findById(req.params.id, function(err, flight) {

        if (!flight)
            res.status(404).send("data is not found");
        else
            flight.touristsList.pop(req.body.tourist)

        flight.save().then(tourist => {
            res.json('Flight updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
};