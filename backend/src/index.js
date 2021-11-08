// run the init file which sets up DB connection
require( './data/init' );
const express= require('express');
const path = require( 'path' );
const cors = require( 'cors' );
//api
const indexRouter = require( './routes' );
const formsRouter = require( './routes/forms' );
const responseRouter = require( './routes/responses' );
const authRouter = require( './routes/auth' );
//pages forms
const formPageRouter = require( './routes/pages/form' );

const logger = require( './middleware/logger' );
const { pageNotFound, apiNotFound } = require( './middleware/not-found' );
const errorHandler = require( './middleware/error' );

const app= express();
app.use( cors() );
// for templating
app.set( 'view engine', 'ejs' )
app.set( 'views', path.join( __dirname, 'views' ) );
app.use( '/static', express.static( path.join( __dirname, 'public' ) ) );

app.use( logger );
app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );
//api
app.use(indexRouter);
app.use( '/forms', formsRouter );
app.use( '/response', responseRouter );
app.use( '/auth', authRouter);
//page forms
app.use( '/pages/form', formPageRouter );

app.use( '/pages', pageNotFound );
app.use( apiNotFound );
app.use( errorHandler );

const PORT = process.env.PORT || 3000;
app.listen( PORT, error=>{
    if( error ) {
        console.error( error.message );
        return;
    }
    console.log( `Check http://localhost:${PORT}` );
});