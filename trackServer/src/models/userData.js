const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    firstName: {
        type: 'String',
        default: ''
    },
    lastName: {
        type: 'String',
        default: ''
    },
    age: Number,
    gender: {
        type: 'String',
        default: 'Male'
    },
    phoneNumber: Number,
    address: {
        type: 'String',
        default: ''
    },
    bloodGroup: {
        type: 'String',
        default: 'B+'
    },
    diabitic: {
        type: 'String',
        default: 'No'
    },
    highBloodPressure: {
        type: 'String',
        default: 'No'
    },
    sugar: {
        type: 'String',
        default: 'No'
    },
    currentUnderDiagnosis:{
        type: 'String',
        default: 'No'
    },
    specialisation: {
        type: 'String',
        default: ''
    },
    fees: {
        type: 'String',
        default: '0'
    },
    userType: {
        type: 'String',
        default: 'Patient'
    },
    medicineList: {
        type: 'Array',
        default: ['None']
    },
    shopName: {
        type: 'String',
        default: 'Name of Shop'
    }
});

mongoose.model('UserData', userDataSchema);