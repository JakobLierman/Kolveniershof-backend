let mongoose = require('mongoose');

let CommentSchema = new mongoose.Schema({
    comment: { type: String, required: true},
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

mongoose.model('Comment', CommentSchema);

let WorkdaySchema = new mongoose.Schema({
    date: { type: Date, required: true, unique: true },
    originalTemplateName: { type: Number, required: true },
    originalWeekNumber: { type: Number, required: true, min: 1, max: 4 },
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
    }],
    holiday: { type: Boolean, required: true, default: false },
    comments: [CommentSchema]
});

mongoose.model('Workday', WorkdaySchema);
