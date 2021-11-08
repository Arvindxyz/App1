const express = require( 'express' );
const { 
    getFormPage,
    //postResponse,
} = require( '../../controllers/pages/formpage' );

const router = express.Router();
 
router.get( '/:id', getFormPage);
//router.post( '/', postResponse);

module.exports = router;