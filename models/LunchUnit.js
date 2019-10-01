let mongoose = require('mongoose');

let LunchUnitSchema = new mongoose.Schema({
    lunch: { type: String, required: true },
    mentors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    clients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }]
});

mongoose.model('LunchUnit', LunchUnitSchema);