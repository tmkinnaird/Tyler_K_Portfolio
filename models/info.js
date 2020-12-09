const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String},
    link: {type:String}
    
});

module.exports = mongoose.model('Portfolio', portfolioSchema);

