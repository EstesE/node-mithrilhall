var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var appEnvironmentConfigs = {
    getIndexConfig: function ( env ) {
        var config = {};
        config.emberName = 'changeset-scope';
        if ( env === 'development' ) {
            config.emberBaseUrl = "http://mithrilhall.azurewebsites.net/";
            config.emberConfig = "%7B%22modulePrefix%22%3A%22mithrilhall%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22/%22%2C%22locationType%22%3A%22auto%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22EXTEND_PROTOTYPES%22%3A%7B%22Date%22%3Afalse%7D%7D%2C%22APP%22%3A%7B%22name%22%3A%22mithrilhall%22%2C%22version%22%3A%220.0.0+62965fd0%22%7D%2C%22exportApplicationGlobal%22%3Afalse%7D"
        } else {
            config.emberBaseUrl = "http://mithrilhall.azurewebsites.net/";
            config.emberConfig = "%7B%22modulePrefix%22%3A%22mithrilhall%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22/%22%2C%22locationType%22%3A%22auto%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22EXTEND_PROTOTYPES%22%3A%7B%22Date%22%3Afalse%7D%7D%2C%22APP%22%3A%7B%22name%22%3A%22mithrilhall%22%2C%22version%22%3A%220.0.0+62965fd0%22%7D%2C%22exportApplicationGlobal%22%3Afalse%7D";
        }
        return config;
    },
}


router.get( '/', function ( req, res ) {
    res.render( 'index', {
        config: appEnvironmentConfigs.getIndexConfig( req.app.get( 'env' ) ),
        user: req.user
    } );
} );

module.exports = router;