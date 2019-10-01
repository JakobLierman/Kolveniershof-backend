let mongoose = require('mongoose');

let GroupSchema = new mongoose.Schema({
    name: {type: String, required: true},
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

mongoose.model('Group', GroupSchema);