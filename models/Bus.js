let mongoose = require('mongoose');

let BusSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    color: {type: String, required: true, match: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/}
});

mongoose.model('Bus', BusSchema, 'busses');
