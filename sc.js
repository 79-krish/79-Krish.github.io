$(document).ready(function()
    {
        $('menu').click(function(){
            $(this).toggleclass('fa-duotone');
            $('header').toggleclass('toggle');
        });
    });

    $('a[href*="#"]').on('click',function(e)
    {
        e.preventdefault();
      
        $('html,body').animate({

            scrolltop :$($(this).attr('href')).offset().top,
        },
        500,
        'linear'


        );
    });