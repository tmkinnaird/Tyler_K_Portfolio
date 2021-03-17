if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
} // <= Heroku
//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const Portfolio = require('./models/info.js')
const show = console.log;
show('not today homie')

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3002; // <= Heroku

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI; // <= Heroku

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useUnifiedTopology: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

// Setup view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static('public'));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//___________________
// Routes
//___________________
//localhost:3000 
// app.get('/' , (req, res) => {
//     res.render('Index');
//   });

app.get('/contact', (req, res) => {
    res.render('Contact');
})

app.get('/aboutme', (req, res) => {
    res.render('Aboutme');
})

/* Index starts here*/
app.get('/', (req, res) => {
    Portfolio.find({}, (err, allPortfolio) => {
        if(!err){
            // console.log(allPortfolio);
            res.render('Index', {
                portfolio: allPortfolio,
            })
        } else {
            res.send(err)
        }
    })
})
 
/* Index ends here*/

/* NEW ROUTE */
app.get('/project/new', (req, res) => {
    res.render('New');
})
/* */

// Delete '/<nameOfResource>/:id' DELETE ex. app.delete('/portfolio/:id')
app.delete('/project/:id', (req, res) => {
    Portfolio.findByIdAndRemove(req.params.id, (err, foundPortfolio) => {
        if(!err) {
           res.redirect('/project')
        } else {
            res.send(err);
        }
    })
})

// Update '/<nameOfResource>/:id' PUT ex. app.put('/project/:id')
app.put('/project/:id', (req, res) => {
    Portfolio.findByIdAndUpdate(req.params.id, req.body, (err, updatedPortfolio) => {
        if(!err) {
            res.redirect('/project')
        } else {
            res.send(err);
        }
    })
})


//Create
app.post('/new', (req, res) => {
    Portfolio.create(req.body, (err, createdPortfolio) => {
        if(!err){
            res.redirect('/project')
        } else{
            res.send(err);
        }
    })
})

// Edit '/<nameOfResource>/:id/edit' GET ex. app.get('/project/:id/edit')
app.get('/project/:id/edit', (req, res) => {
    Portfolio.findById(req.params.id, (err, foundPortfolio) => {
        if(!err) {
            res.render('Edit', {
                portfolio: foundPortfolio
            })
        } else {
            res.send(err);
        }
    })
})

//Show
app.get('/project/:id', (req, res) => {
    Portfolio.findById(req.params.id, (err, foundPortfolio) => {
        if(!err) {
            res.render('Show', {
                portfolio: foundPortfolio
            })
        } else {
            res.send(err);
        }
    })
})








//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));