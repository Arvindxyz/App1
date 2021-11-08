const mongoose = require( 'mongoose' );
const Response = mongoose.model( 'Response' );
//import AppConfig from '@/config';
//const { apiBaseUrl } = AppConfig;

const getResponses= async ( req, res, next ) => {
    //const { claims } = res.locals;
    //console.log( claims ); // { name: 'John Doe', email: 'john.doe@example.com', role: 'admin' }
   
    try {
        const responses = await Response.find();//find( {key:value} );
        res.status( 200 ).json({
            message: `You are being served by process ${process.pid}`,
            responses: responses
        });
    } catch( error ) {
        error.status = 500;
        return next( error );
    }
};

const postResponse = async ( req, res, next ) => {
    const participantsResponse = req.body;
    let { id } = req.params; 
    console.log('\nreq body : ',req.body);
    console.log('\nform id : ',id);

    try {
        const resp= await Response.findOneAndUpdate(
            { formId : id},
            { $push: { 
                 participantsResponses:participantsResponse
                }
            }
        );
        if(resp==null){
            message= `There is some problem with response collection. please contact admin`;
        }
        else{
           console.log('In response body : ',resp);
           message= `Your data is successfully saved`;
        }   
        res.render('response',{message});
      /*  res.status( 200 ).json({
            message: `Your data is successfully saved`,
            participantsResponse: resp
        });
      */  
    } catch( error ) {
        if( error.name === 'ValidationError' ) {
            error.status = 400; // bad request 
            return next( error );
        }
        error.status = 500;
        next( error );
    }
};

const getResponsesByFormId = async ( req,res,next) => {
    let { id } = req.params;

    if( id.length !== 24 ) {
        const error = new Error( 'Invalid form id' );
        error.status = 400; // bad request
        next( error );
        return;
    }

    try {
        const match = await Response.findById( id );

        if( !match ) {
            const error = new Error( 'Response records with given id does not exist' );
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

module.exports = { 
    getResponses,
    postResponse,
    getResponsesByFormId
};

