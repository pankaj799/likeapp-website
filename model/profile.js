const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema=new mongoose.Schema({
    ownername: {
        type: String,
        required: true
    },
    agencyname: {
        type: String,
        required: true
    },
    uwaid: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    idcardnumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    signature: {  
        type: String,
        // required: true
    }
},
{
    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
}
);


module.exports = profile = mongoose.model('profile', profileSchema);