let mongoose = require('mongoose');

let WorkdayTemplateSchema = new mongoose.Schema({
    templateName: { type: String, required: true },
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
    }],
    holiday: { type: Boolean, required: true, default: false }
});
// Define unique compound index
WorkdayTemplateSchema.index({ templateName: 1, weekNumber: 1, dayNumber: 1 }, { unique: true });

mongoose.model('WorkdayTemplate', WorkdayTemplateSchema);
