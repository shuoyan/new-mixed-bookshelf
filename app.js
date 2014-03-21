function($,              _,                DOMUtils,
         Embed) {

    "use strict";

    var enabled = true;

    var touchIndicatorDiv = $("<div class='lens-touch-indicator' />");

    var TouchIndicator = /** @lends Lens.LAF.TouchIndicator */ {
        /**
         * Enables scrollbar styling
         */
        enable: function() {
            DOMUtils.addStylesheet("LAF/widgets/touch_indicator.css");
            enabled = true;
        }
        

Lens.init(["Components/draggable"], function() {
    "use strict";

    var $ = Lens.Libs.jQuery;

    var indesigncs3 = $("#indesigncs3");

    Lens.Components.Draggable(indesigncs3);

    indesigncs3[0].addEventListener("lens:touchstart", function(evt) {
        var touches = evt.targetTouches;
        

        touches.ended(function() {
            
        });
    });
});





