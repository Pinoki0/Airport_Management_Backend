const Tourist = require('../models/Tourist');


exports.createTourist = function (req, res,next) {
    let tourist = new Tourist(req.body);
    tourist.save()
        .then(tourist => {
            res.status(200).json({'tourist': 'tourist added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new tourist failed');
        });
};

exports.showTourists = function (req, res,next) {
    Tourist.find(function(err, tourists) {
        if (err) {
            console.log(err);
        } else {
            res.json(tourists);
        }
    });
};

exports.addFlight = function (req, res,next) {

    Tourist.findById(req.params.id, function(err, tourist) {

        if (!tourist)
            res.status(404).send("data is not found");
        else
        tourist.flightsList.push(req.body.flight);    //

        tourist.save().then(tourist => {
            res.json('Tourist updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
};
exports.deleteFlight = function (req, res,next) {

    Tourist.findById(req.params.id, function(err, tourist) {

        if (!tourist)
            res.status(404).send("data is not found");
        else
            tourist.flightsList.pop(req.body.flight)

        tourist.save().then(tourist => {
            res.json('Tourist updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
};
exports.showTourist = function (req, res,next) {
    let id = req.params.id;
    Tourist.findById(id, function(err, tourist) {
        res.json(tourist);
    });
};

exports.deleteTourist = function (req, res,next) {
    Tourist.findById(req.params.id, function (err,tourist) {
        if (!tourist)
            res.status(404).send("data is not found");
        else
            tourist.delete().then(tourist => {
                res.json('Tourist deleted!');
            })
                .catch(err => {
                    res.status(400).send("Delete is not possible");
                });
    });
};