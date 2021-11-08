const express = require( 'express' );
const { 
    getResponses,
    postResponse,
    getResponsesByFormId,
   
} = require( '../controllers/responses' ); 

const router = express.Router();
 
router.get( '/', getResponses);
router.get( '/:id', getResponsesByFormId);
router.post( '/:id', postResponse);

module.exports = router;