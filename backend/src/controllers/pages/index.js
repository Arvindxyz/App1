const path = require( 'path' );

const home = ( req, res ) => {
    res.render( 'home' );
};

module.exports = {
    home
};