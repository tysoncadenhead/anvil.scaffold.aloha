/*global define, $, alert */

define([
    "aloha/plugin",
    "ui/ui",
    "ui/button"
], function (Plugin, Ui, Button) {

    "use strict";
 
    return Plugin.create("{{name}}", {

        // Renders a button into the UI
        renderButton: function () {

            // Adopt the button UI
            var button = Ui.adopt("{{name}}", Button, {
                click: function(){
                    alert("Clicked {{name}}");
                }
            });

            // Add a class to the button for styling
            button.element.addClass("button-{{name}}");
            
        },

        // Triggered on initialization
        init: function () {

            // Add our stylesheet
            $("head").append("<link rel=\"stylesheet\" href=\"../css/attributes.css\" />");

            this.renderButton();
        }
        
    });
});