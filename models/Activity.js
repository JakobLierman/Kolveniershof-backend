let mongoose = require('mongoose');

let ActivitySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    icon: {type: String, required: true}
});

mongoose.model('Activity', ActivitySchema);
