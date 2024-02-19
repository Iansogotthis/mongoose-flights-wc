const Flight = require('../Models/flight');
module.exports = {
    new: newFlight,
    create,
    index           
    };


function newFlight(req,res) {
    const flight = new Flight(req.body);
     console.log('departs', newFlight.departs)
    const defaultDate = flight.departs.toISOString().slice(0, 16)
    console.log(defaultDate)
    res.render('flights/new', {defaultDate: defaultDate})
}

async function create(req, res){
	console.log(req.body, " <- is the contents of our form!")

	try {
		const createdFlightDoc = await Flight.create(req.body)
		res.redirect('/flights')
	} catch(err){
		console.log(err)
		res.redirect('/flights/new')
	}
}
async function index(req, res) {
    
    const flights = await Flight.find({});
    res.render('flights/index', { flights });

    
}