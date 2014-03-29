Lens.init(["Components/draggable"], function() {
    "use strict";

    var $ = Lens.Libs.jQuery;

    var indesigncs3 = $("#indesigncs3");
    var citadelspirit = $("#citadelspirit");
    var music = $("music");

    Lens.Components.Draggable(indesigncs3,false);
    Lens.Components.Draggable(citadelspirit,false);
    Lens.Components.Draggable(music,false);

    indesigncs3[0].addEventListener("lens:touchstart", function(evt) {
        var touches = evt.targetTouches;
        touches.ended(function() {    
        });
    });

    citadelspirit[0].addEventListener("lens:touchstart", function(evt) {
        var touches = evt.targetTouches;
        touches.ended(function() {    
        });
    });

    music[0].addEventListener("lens:touchstart", function(evt) {
        var touches = evt.targetTouches;
        touches.ended(function() {    
        });
    });

});





