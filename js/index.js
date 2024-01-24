onsole.log("index.js loaded correctly")

$(document).ready(function() {
    $('#downloadResumeButton').click(function() {
        console.log('Resume Download Clicked!'); 
    });

    $('#viewProjects').click(function() {
        console.log('View Projects Clicked!'); 
    });

    $('#seeMore').click(function() {
        console.log('See More 1 Clicked!'); 
    });

    $('#seeMore2').click(function() {
        console.log('See More 2 Clicked!'); 
    });

    $('#seeMore3').click(function() {
        console.log('See More 3 Clicked!'); 
    });

    $('#downloadResumeButton').hover(
        function() {
            $(this).css('color', 'orange');
        }, 
        function() {
            $(this).css('color', ''); 
        }
    );

    $(document).ready(function() {
        $('#about, #skills, #work, #contact, #viewProjects').hover(
            function() {
                $(this).css({
                    'text-decoration': 'underline',
                    'color': 'orange'
                });
            }, 
            function() {
                $(this).css({
                    'text-decoration': 'none',
                    'color': ''
                });
            }
        );
    });

    $(document).ready(function() {
        $('#skills').click(function(event) {
            event.preventDefault(); 
    
            var uiuxSectionOffset = $('#uiux').offset().top; 
    
            $('html, body').animate({
                scrollTop: uiuxSectionOffset
            }, 1000); 
        });
    });

    $(document).ready(function() {
        $('#work').click(function(event) {
            event.preventDefault(); 
    
            var uiuxSectionOffset = $('#workClick').offset().top; 
    
            $('html, body').animate({
                scrollTop: uiuxSectionOffset
            }, 1000); 
        });
    });


});