/**
 * Global adapter config
 * 
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which 
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.adapters = {

    "default": "mongo",
    mongo:{
        module : "sails-mongo",
        user: 'rob',
        password: 'rob',
        database: 'analytics_input',
        schema: "false",
        replSet: {
            servers: [
                {
                    //host: 'mongodb://rob:rob@candidate.14.mongolayer.com:10301/analytics'
                    host: 'candidate.14.mongolayer.com',
                    port: 10301
                },
                {
                    //host: 'mongodb://rob:rob@candidate.15.mongolayer.com:10300/analytics'
                    host: 'candidate.15.mongolayer.com',
                    port: 10300
                }
            ],
            options: {} // See http://mongodb.github.io/node-mongodb-native/api-generated/replset.html (optional)
        }
    }
};