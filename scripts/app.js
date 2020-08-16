var main = function () {
    "use strict";
    var $input = $("<input>").appendTo("footer"); 
    $input.on("keypress", function (event) 
{ 
   if (event.keyCode === 13) {
       $("main .photos").empty();
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + $input.val() + "&format=json&jsoncallback=?";
    $.getJSON(url, function (flicrResponse)
    {
        var displayPic = function (picIndex) {
           // attr - вручную прикрепляет свойство src для тега img
            var $img = $("<img>").attr("src", flicrResponse.items[picIndex].media.m).hide();   
            
            $("main .photos").append($img);
            $img.fadeIn();
            setTimeout (function () {
             picIndex = picIndex + 1;   
            displayPic(picIndex);}, 1000);
        };
        displayPic(0);
    });
    $input.val("");
        };
    });
};
$(document).ready(main);

