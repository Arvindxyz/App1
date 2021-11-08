const mongoose = require( 'mongoose' );
const Form = mongoose.model( 'Form' );
///const Response = mongoose.model( 'Response' );

const getFormPage = async (  req, res, next ) => {
    let { id } = req.params;
    let form;
  if( id.length !== 24 ) {
        const error = new Error( 'Invalid form id' );
        error.status = 400; // bad request
        next( error );
        return;
    } 
   
    try {
            const match = await Form.findById(id);
        
        if( !match ) {
            const error = new Error( 'form with given id does not exist' );
            error.status = 404;
            next( error );
            return;
        }
        else{
            let k= match.formbody;
            let p= match;
            p.formbody= k.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"'); 
            form= p;
        }
     
    } catch( error ) {
        error.status = 500;
        return next( error );
    }

    res.render('form',{form});

};
/*
// http://localhost:3000/pages/form
const postResponse = async ( req, res, next ) => {
    const userResponse = req.body;

    try {
        const updatedResponse = await Response.create( userResponse);
        res.json( updatedResponse );
       //res.send(userResponse);
    } catch( error ) {
        if( error.name === 'ValidationError' ) {
            error.status = 400; // bad request 
            return next( error );
        }

        error.status = 500;
        next( error );
    }
};
*/
module.exports = {
    getFormPage
    
};