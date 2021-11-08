// create the models to talk to the DB
require( '../models/Form' );
require( '../models/Response' );
require( '../models/User' );

const mongoose = require( 'mongoose' );

mongoose.set( 'returnOriginal', false );
//mongoose.set( 'runValidators', true );
// mongoose.set( 'useFindAndModify', false );

console.log( 'Connecting to mongodb://localhost:27017/formsappDB' );
mongoose.connect( 'mongodb://localhost:27017/formsappDB' );

mongoose.connection.on( 'connected', () => {
    console.log( 'connected' );
});

mongoose.connection.on( 'error', error => {
    console.error( error.message );
});

mongoose.connection.on( 'disconnect', error => {
    console.error( error.message );
});