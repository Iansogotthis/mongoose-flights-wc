const Flight = require('../Models/flight');
module.exports = {
    new: newFlight,
    create,
    index           
    };

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    const flight = new Flight(req.body);
    function error(err) {
        if (err) {
            return res.render('flights/new');
        }
    flight.save()
    
    console.log(flight);
        res.redirect('/flights');
    }
}



async function index(req, res) {
    
    const flights = await Flight.find({});
    res.render('flights/index', { flights });

    
}