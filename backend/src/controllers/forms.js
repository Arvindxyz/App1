const mongoose = require( 'mongoose' );
const Form = mongoose.model( 'Form' );
const Response = mongoose.model( 'Response' );
const AppConfig= require( '../config.js' );
const { apiBaseUrl } = AppConfig;
const response= { };
const sendFormAndLink={ };
   // http://localhost:3000/workshops?fields=name&sort=desc
const getForms = async ( req, res, next ) => {
    //const { claims } = res.locals;
    //console.log( claims ); 
    try {
        const forms = await Form.find();
        res.status( 200 ).json({
            message: `You are being served by process ${process.pid}`,
            forms: forms
        });
    } catch( error ) {
        error.status = 500;
        return next( error );
    }
};

const postForm = async ( req, res, next ) => {
    const form = req.body;
 
    try {
        const updatedForm = await Form.create( form ); 
         response.name= updatedForm.name;console.log(updatedForm.name);
         response.formId= updatedForm.id;console.log(updatedForm.id);
         response.user= 'mark@example.com';
         response.isActive= updatedForm.isActive;
         response.participantsResponses=[];
        const updatedResponse= await Response.create(response);
          console.log(updatedResponse);
        sendFormAndLink.link=`${apiBaseUrl}/pages/form/${updatedForm.id}`;
        sendFormAndLink.updatedForm= updatedForm;
        res.status( 200 ).json( sendFormAndLink );
    } catch( error ) {
        if( error.name === 'ValidationError' ) {
            error.status = 400; // bad request 
            return next( error );
        }
 
        error.status = 500;
        next( error );
    }
};

const getFormById = async ( req,res,next) => {
    let { id } = req.params;

    if( id.length !== 24 ) {
        const error = new Error( 'Invalid form id' );
        error.status = 400; // bad request
        next( error );
        return;
    }
    try {
        const match = await Form.findById( id );
        if( !match ) {
            const error = new Error( 'form with given id does not exist' );
            error.status = 404;
            next( error );
            return;
        }

        res.json( match );
    } catch( error ) {
        error.status = 500;
        return next( error );
    }
};
const patchFormById = async ( req, res, next ) => {
    const { id } = req.params; console.log(id);
    const data = req.body; console.log(data);

    try {
        const updatedForm = await Form.findByIdAndUpdate( 
            {_id:id},
            { isActive: data.status }
            /*, { runValidators : true, returnOriginal: false }*/ 
        ); console.log(updatedForm.isActive);
        const updatedResponse = await Response.findOneAndUpdate( 
            {formId:id},
            { isActive: data.status }
            /*, { runValidators : true, returnOriginal: false }*/ 
        ); console.log(updatedResponse);
        res.status( 200 ).json( updatedResponse );
    } catch( error ) {
        // check what type of error and send appropriate error message/status code etc.
        error.status = 500;
        next( error );
    }
};

const deleteFormById = async ( req, res, next ) => {
    const { id } = req.params;

    try {
        const removed = await Workshop.findByIdAndRemove( id );
        
        if( !removed ) {
            const error = new Error( 'Form not found' );
            error.status = 404;
            return next( error );
        }
        
        res.status( 204 ).send(); // 204 
    } catch( error ) {
        error.status = 500;
        next( error );
    }
};


module.exports = {
    getForms,
    postForm,
    getFormById,
    patchFormById,
    deleteFormById,
};