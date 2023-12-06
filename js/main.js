(function ($) {
    "use strict";

    // Carregando
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Inicio
    new WOW().init();


    // Navbar Fixa
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Botão de retornar ao topo
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Contagem do index e do about
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });



    // Carrossel comentários
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Botão de reserva
    document.addEventListener('DOMContentLoaded', function () {
        const reserveButton = document.getElementById('reserveButton');
    
        reserveButton.addEventListener('click', function () {
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const datetimeInput = document.getElementById('datetime');
            const selectInput = document.getElementById('select1');
    
            if (
                nameInput.value.trim() === '' ||
                emailInput.value.trim() === '' ||
                datetimeInput.value.trim() === '' ||
                selectInput.value.trim() === '0'
            ) {
                alert('Por favor, preencha todos os campos do formulário.');
            } else {
                alert('Reserva realizada com sucesso!');
            }
    
        });
        
    });

})(jQuery);

