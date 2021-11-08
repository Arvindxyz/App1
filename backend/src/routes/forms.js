const express = require( 'express' );
const { 
    getForms,
    postForm,
    getFormById,
    patchFormById,
} = require( '../controllers/forms' );

const router = express.Router();

router.get( '/', getForms);
router.get( '/:id', getFormById);
router.post( '/', postForm);
router.patch( '/:id', patchFormById);

module.exports = router;