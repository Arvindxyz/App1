const mongoose = require( 'mongoose' );

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    isActive:{
        type: Boolean,
        default: true
    },
    formbody: {
        type: String,
        required: true
    }
});

mongoose.model( 'Form', formSchema );