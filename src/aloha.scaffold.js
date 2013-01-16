/*jslint node: true */

var path = require( "path" );

module.exports = function( _, anvil ) {

    "use strict";

    var root = __dirname;

    anvil.scaffold( {
        type: "aloha:plugin",
        description: "creates an aloha editor plugin",
        prompt: [{
            name: "path",
            description: "The path where Aloha is installed. For example: /js/aloha",
            required: true
        }, {
            name: "name",
            description: "Your plugin name",
            required: true
        }],
        output: {

            // Plugin
            "{{path}}/aloha/plugins/extra/{{name}}/lib/{{name}}-plugin.js": anvil.scaffold.file( root + "/templates/plugin/plugin.js" ),

            // i18n
            "{{path}}/aloha/plugins/extra/{{name}}/nls/i18n.js": anvil.scaffold.file( root + "/templates/plugin/i18n.js" ),
            "{{path}}/aloha/plugins/extra/{{name}}/nls/ca/i18n.js": anvil.scaffold.file( root + "/templates/plugin/i18n.sub.js" ),
            "{{path}}/aloha/plugins/extra/{{name}}/nls/de/i18n.js": anvil.scaffold.file( root + "/templates/plugin/i18n.sub.js" ),
            "{{path}}/aloha/plugins/extra/{{name}}/nls/mk/i18n.js": anvil.scaffold.file( root + "/templates/plugin/i18n.sub.js" ),
            "{{path}}/aloha/plugins/extra/{{name}}/nls/pt-br/i18n.js": anvil.scaffold.file( root + "/templates/plugin/i18n.sub.js" ),
            "{{path}}/aloha/plugins/extra/{{name}}/nls/ru/i18n.js": anvil.scaffold.file( root + "/templates/plugin/i18n.sub.js" ),
            "{{path}}/aloha/plugins/extra/{{name}}/nls/uk/i18n.js": anvil.scaffold.file( root + "/templates/plugin/i18n.sub.js" ),
            "{{path}}/aloha/plugins/extra/{{name}}/nls/zn-hans/i18n.js": anvil.scaffold.file( root + "/templates/plugin/i18n.sub.js" ),

            // CSS
            "{{path}}/aloha/plugins/extra/{{name}}/css/attributes.css": anvil.scaffold.file( root + "/templates/plugin/attributes.css" ),

            // Bare Directories (How embarrassing!)
            "{{path}}/aloha/plugins/extra/{{name}}/img/empty": anvil.scaffold.file( root + "/templates/plugin/empty" ),
            "{{path}}/aloha/plugins/extra/{{name}}/doc/empty": anvil.scaffold.file( root + "/templates/plugin/empty" ),
            "{{path}}/aloha/plugins/extra/{{name}}/res/empty": anvil.scaffold.file( root + "/templates/plugin/empty" ),
            "{{path}}/aloha/plugins/extra/{{name}}/vendor/empty": anvil.scaffold.file( root + "/templates/plugin/empty" ),

            // Tests
            "{{path}}/aloha/plugins/extra/{{name}}/test/index.html": anvil.scaffold.file( root + "/templates/plugin/qunit.html" ),
            "{{path}}/aloha/plugins/extra/{{name}}/test/qunit.js": anvil.scaffold.file( root + "/templates/plugin/qunit.js" )

        }
    });
};