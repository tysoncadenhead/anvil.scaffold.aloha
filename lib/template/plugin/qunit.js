require(["../lib/{{name}}-plugin.js"], function (plugin) {

    module( "{{name}}" );

    test( "Exists", function() {
        equal( typeof plugin !== "undefined", true, "The plugin should be defined" );
    });

});