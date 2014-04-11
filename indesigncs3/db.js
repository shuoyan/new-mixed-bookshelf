Lens.init(function() {
    "use strict";

    window.DB = {
    deferred: [],
    
    init: function(){
        var db = Lens.DB.server("http://luminar-copper.media.mit.edu:8000", true);
        for (var i=0 ){
            DB.deferred.push($.Deferred());
        }

        DB.Shares =db.Collection("books1:Shares", DB.deferred[0].resolve);

        $.when.apply($, DB.deferred).then(DB.onReady);
    }
}