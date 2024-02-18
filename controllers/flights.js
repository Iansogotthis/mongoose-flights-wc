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
    for(let key in req.body) {
        if(req.body.date) delete req.body[key];
    }
    console.log(req.body)
    flight.save()
    function error(err) {
        if (err) {
            return res.render('flights/new');
        }
    console.log(flight);
        res.redirect('/flights');
    }
}



async function index(req, res) {
    
    const flights = await Flight.find({});
    res.render('flights/index', { flights });

    
}