    };
Lens.init(["Components/draggable"], function() {
    "use strict";

    var $ = Lens.Libs.jQuery;

    var indesigncs3 = $("#indesigncs3");

    Lens.Components.Draggable(indesigncs3);

    mover[0].addEventListener("lens:touchstart", function(evt) {
        var touches = evt.targetTouches;
        

        touches.ended(function() {
            
        });
    });
});




  
$(function() {
    $( "#citadelspirit" ).draggable();
  });
  
$(function() {
    $( "#notsowild" ).draggable();
  });

$(function() {
    $( "#thedevotedlife" ).draggable();
  }); 

$(function() {
    $( "#slowlooking" ).draggable();
  });

$(function() {
    $( "#thebrain" ).draggable();
  });

$(function() {
    $( "#girl" ).draggable();
  });

$(function() {
    $( "#music" ).draggable();
  });

$(function() {
    $( "#choosing" ).draggable();
  });

$(function() {
    $( "#nothing" ).draggable();
  });

$(function() {
    $( "#persuasion" ).draggable();
  });

$(function() {
    $( "#enterprise" ).draggable();
  });

$(function() {
    $( "#iainpears" ).draggable();
  }); 

