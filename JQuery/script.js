$(document).ready(function () {
    //The shineLoop function uses the chaining technique to
    //utilize multiple animate event methodsd in the same funcion
    function shineLoop() {
        $(".shine").animate({ backgroundPositionX: '1600px' }, 3000)
            .animate({ backgroundPositionX: '-800px' }, 3000);
    };

    //setInterval will repeat the shineLoop function and 0
    //sets the delayed amount of time between each repeat
    setInterval(shineLoop, 0);

    //Shrinks header size when the document is scrooled down
    //by 50 pixels
    $(document).on("scroll", function () {
        if ($(document).scrolledTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classiCars").on({
        //Object Literal: Triggers the images to slide down one after
        //the other when the user's mouse enters the div area with the
        //#classCars ID
        mouseenter: function() {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //Triggers the images to slide up and hide each title
        //one after the other when the user's mouse leaves
        //the div area with the #classicCars ID
        mouseleave: function() {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //Creates a toggle effect on each FAQ question by checking
    //each element's sibling so they don't all display whe
    //one question is clicked
    $('div.question').on('click', function() {
        $(this).next().slideToggle('slow');
    });
}) 	

// Equivalent event setup using the `.on()` method
$( "p" ).on( "click", function() {
    console.log( "click" );
});

// Hide all level 1 headings over half a second; then wait for 1.5 seconds
// and reveal all level 1 headings over 0.3 seconds
$( "h1" ).hide( 500 ).delay( 1000 ).show( 500 );