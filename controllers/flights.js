const Flight = require('../models/flight');
module.exports = {
    new: newFlight,
    create
    };

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save();
    res.redirect('/');

}