const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    idproofnumber: {
        type: Number,
        required: true
    },
    idproof: {
        type: String,
        // required: true
    },
    uwaliveid: {
        type: String,
        required: true
    },
    dob: {  
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    agencyname: {
        type: String,
        required: true
    },
    agencycode: {
        type: Number,
        required: true
    }
},
{
    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
}
);


module.exports = project = mongoose.model('project', projectSchema);