/*jslint node: true */

var path = require( "path" ),
    root = path.resolve( __dirname, "../lib/template/plugin/" ) + "/";


module.exports = function( _, anvil ) {

    "use strict";

    anvil.scaffold( {

        type: "aloha:plugin",
        description: "creates an aloha editor plugin",

        prompt: [{
            name: "path",
            description: "The path where Aloha is installed. For example: js/aloha:",
            required: true
        }, {
            name: "name",
            description: "Your plugin name:",
            required: true
        }],

        output: {

            // Path
            "{{path}}/aloha/plugins/extra/{{name}}": {

                // Package
                "package.json": anvil.scaffold.file( root + "package.json" ),

                // The Plugin
                "lib/{{name}}-plugin.js": anvil.scaffold.file( root + "plugin.js" ),

                // i18n
                "nls": {
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

                // Documentation
                "doc/README.md": anvil.scaffold.file( root + "README.md" ),

                // Bare Directories (How embarrassing!)
                "res/empty": anvil.scaffold.file( root + "empty" ),
                "vendor/empty": anvil.scaffold.file( root + "empty" ),

                // Tests
                "test": {
                    "qunit.html": anvil.scaffold.file( root + "qunit.html" ),
                    "qunit.js": anvil.scaffold.file( root + "qunit.js" ),
                    "index.html": anvil.scaffold.file( root + "index.html" )
                }

            }

        }
    });
};