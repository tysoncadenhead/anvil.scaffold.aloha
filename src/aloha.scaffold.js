/*jslint node: true */

var path = require( "path" );

module.exports = function( _, anvil ) {

    "use strict";

    var root = __dirname + "/templates/plugin/";

    anvil.scaffold( {
        type: "aloha:plugin",
        description: "creates an aloha editor plugin",
        prompt: [{
            name: "path",
            description: "The path where Aloha is installed. For example: /js/aloha:",
            required: true
        }, {
            name: "name",
            description: "Your plugin name:",
            required: true
        }],
        output: {

            // Path
            "{{path}}/aloha/plugins/extra/{{name}}/": {

                // The Plugin
                "lib/{{name}}-plugin.js": anvil.scaffold.file( root + "/templates/plugin/plugin.js" ),

                // i18n
                "nls/": {
                    "i18n.js": anvil.scaffold.file( root + "i18n.js" ),
                    "ca/i18n.js": anvil.scaffold.file( root + "i18n.sub.js" ),
                    "de/i18n.js": anvil.scaffold.file( root + "i18n.sub.js" ),
                    "mk/i18n.js": anvil.scaffold.file( root + "i18n.sub.js" ),
                    "pt-br/i18n.js": anvil.scaffold.file( root + "i18n.sub.js" ),
                    "ru/i18n.js": anvil.scaffold.file( root + "i18n.sub.js" ),
                    "uk/i18n.js": anvil.scaffold.file( root + "i18n.sub.js" ),
                    "zn-hans/i18n.js": anvil.scaffold.file( root + "i18n.sub.js" )
                },

                // CSS
                "css/attributes.css": anvil.scaffold.file( root + "attributes.css" ),

                // Bare Directories (How embarrassing!)
                "img/empty": anvil.scaffold.file( root + "empty" ),
                "doc/empty": anvil.scaffold.file( root + "empty" ),
                "res/empty": anvil.scaffold.file( root + "empty" ),
                "vendor/empty": anvil.scaffold.file( root + "empty" ),

                // Tests
                "test/": {
                    "index.html": anvil.scaffold.file( root + "qunit.html" ),
                    "qunit.js": anvil.scaffold.file( root + "qunit.js" )
                }

            }

        }
    });
};