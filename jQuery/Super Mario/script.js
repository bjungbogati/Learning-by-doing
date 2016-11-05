$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            case 37: // left
                $('img').animate({left: "-=10px"}, 'fast');
                break;

                  case 38: // up
                $('img').animate({top: "-=10px"}, 'fast');
                break;

             case 39: // right
                $('img').animate({left: "+=10px"}, 'fast');
                break;


            case 40: // down
                $('img').animate({top: "+=10px"}, 'fast');
                break;
          
         
            default:
                break;
        }
    });
});