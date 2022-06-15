const mongoose = require("mongoose");


const institutionSchema = new mongoose.Schema({
    name: { type: String },
    degree: { type: String },
    subject:{type: String},
    category:{ type: String },
    country: { type: String },
    description1:{type: String},
    description2:{type: String},
    group:{type: String},
    logo: { type: String },
    groupLogo: { type: String },
	image: { type: String },
});
module.exports =  mongoose.model('Institution', institutionSchema)