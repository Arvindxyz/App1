const mongoose = require( 'mongoose' );

const responseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    formId:{
        type: String,
        required: true
    }, 
    user:{ 
        type:String,
        required:true,
    },
    isActive:{
        type: Boolean,
        default: true
    },
    participantsResponses:[Object]    
});

mongoose.model( 'Response', responseSchema );
