let mongoose = require('mongoose');

let ActivitySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    icon: {type: String, required: true} // TODO - store img
});

mongoose.model('Activity', ActivitySchema);