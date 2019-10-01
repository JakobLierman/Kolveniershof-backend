let mongoose = require('mongoose');

let WorkdaySchema = new mongoose.Schema({
    date: { type: Date, required: true, default: Date.now() },
    daycareMentors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    morningBusses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusUnit'
    }],
    amActivities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ActivityUnit'
    }],
    lunch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LunchUnit'
    },
    pmActivities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ActivityUnit'
    }],
    holiday: { type: Boolean, default: false }
});

mongoose.model('Workday', WorkdaySchema);