var kraken = {
    homePage : function() {
        if($('.slider-home').length) {            
            $('.slider-home').slick({
                dots: false,
                arrows: true,
                infinite: true,
                speed: 1000,
                autoplay: true,
                autoplaySpeed: 8000,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnFocus: false,
                pauseOnHover: false,
                responsive: [   
                    {
                    breakpoint: 520,
                    settings: {
                        dots: true,
                        arrows: false
                    }
                    } 
                ]
            }); 
        }

        if($('.slider-logos').length) {
            $('.slider-logos').slick({
                dots: false,
                arrows: false,
                infinite: true,
                speed: 800,
                autoplay: true,
                autoplaySpeed: 6000,
                slidesToShow: 4,
                slidesToScroll: 1,
                pauseOnFocus: false,
                pauseOnHover: false 
            });
        }

        if($('.slider-valores').length) {
            $('.slider-valores').slick({
                dots: false,
                arrows: false,
                infinite: true,
                speed: 800,
                autoplay: true,
                autoplaySpeed: 6000,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnFocus: false,
                pauseOnHover: false                 
            });
        }

        $('.mobile-menu').on('click', function(e) {
            e.preventDefault();
            $( this ).toggleClass( "active" );
            $('.navigation').slideToggle();
        });

        if($('#mundos-modal').length) {
            $("#mundos-modal").fancybox({"touch" : false}).trigger('click');
        }
    },

    nosotros : function() {
        if($('.history-content').length) {
            $('.history-content').slick({
                dots: false,
                arrows: true,
                infinite: true,
                speed: 800,                 
                slidesToShow: 1,
                slidesToScroll: 1 
            });
        }

        if($('.counter-content').length) {
            
            $('.counter-content .valor span').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    },

    tabs : function() {
        if($('.tabs').length) {

            $('.tabs .tab-content').hide().filter(':first').show();

            $('.tabs .tab li').on('click', function() {

                var mostrar = $(this).data("mostrar");

                $('.tabs .tab li').removeClass('active');
                $(this).addClass('active');

                $('.tabs .tab-content').hide();
                $('#'+ mostrar).show();
            });
        }
    }
}
$(document).ready(function() {
    kraken.homePage();
    kraken.nosotros();
    kraken.tabs();

    // https://bootstrap-datepicker.readthedocs.io/en/latest/
    if($('.datepicker').length) {
        $('.datepicker').datepicker({
            language: 'es',
            format: 'dd/mm/yyyy'
         });
    }

    // input file
    var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector('span').innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
    
})