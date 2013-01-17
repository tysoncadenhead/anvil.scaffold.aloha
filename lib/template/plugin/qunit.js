/*global module, test, Aloha, notEqual, console */

module( "{{name}}" );

Aloha.ready(function () {

    "use strict";

    var plugins = Aloha.getLoadedPlugins(),
        plugin = Aloha.require("{{name}}/{{name}}-plugin");

    test( "Exists", function() {
        notEqual(plugins.indexOf("{{name}}"), -1, "The plugin should be defined" );
    });

    // Here is the plugin. Write some tests with it!
    console.log(plugin);

});