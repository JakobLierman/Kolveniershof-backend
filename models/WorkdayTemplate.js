let mongoose = require('mongoose');

let WorkdayTemplateSchema = new mongoose.Schema({
    weekNumber: { type: Number, required: true, min: 1, max: 4 },
    dayNumber: { type: Number, required: true, min: 1, max: 5 },
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
    eveningBusses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusUnit'
    }]
});

mongoose.model('WorkdayTemplate', WorkdayTemplateSchema);
