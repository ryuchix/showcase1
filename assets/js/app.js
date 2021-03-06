"use strict";

const app = {
    init() {
        app.start();
        app.loadAgents();
        app.slidesInit();
        app.headerInit();
    },

    slidesInit() {
        $('.hero-slides').slick({
            adaptiveHeight: true,
            arrows: false,
            centerMode: true,
            fade: true,
            infinite: true,
            lazyLoad: 'progressive',
            accessibility: false,
            autoplay: false,
            slidesToShow: 1,
            speed: 2500
        });

        $('.testimonials-wrapper').slick({
            adaptiveHeight: false,
            arrows: false,
            dots: false,
            centerMode: false,
            fade: false,
            infinite: true,
            lazyLoad: 'progressive',
            accessibility: false,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 500
        });

        $('.blogs-list').slick({
            adaptiveHeight: false,
            arrows: false,
            centerMode: false,
            fade: false,
            infinite: true,
            lazyLoad: 'progressive',
            accessibility: false,
            slidesToShow: 1,
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 500
        });

        // $('.property-list').slick({
        //     adaptiveHeight: true,
        //     arrows: false,
        //     centerMode: true,
        //     fade: false,
        //     infinite: true,
        //     lazyLoad: 'progressive',
        //     accessibility: false,
        //     slidesToShow: 3,
        //     autoplay: false,
        //     autoplaySpeed: 1000,
        //     speed: 500
        // });
    },

    loadAgents() {
        $('.ouragents-list').slick({
            infinite: true,
            speed: 800,
            slidesToShow: 15,
            slidesToScroll: 3,
            rows: 7,
            arrows: false,
            slidesPerRow: 1,
            autoplay: false,
            autoplaySpeed: 4000,
            responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 2,
                    rows: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    rows: 3,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    rows: 2,
                }
            },
            ]
        });

        jQuery('.ouragents-list .ouragents-item').on('click', function() {
            var agentPosition = jQuery(this).offset().top, 
                agentLeftPostion = jQuery(this).offset().left,
                offsetLeft = jQuery(this).width(),
                offsetHeight = jQuery('.ouragents-wrap .ouragents-list').offset().top,
                leftCounter = agentLeftPostion + jQuery('.ouragents-panel-popup').width(),
                agentPhotoUrl = jQuery(this).find('.img-wrap canvas').attr('data-src'); 
                agentName = jQuery(this).find('.name-text').text(); 
                agentPos = jQuery(this).find('.agent-dtls').attr('data-jobtitle'); 
                agentUrl = jQuery(this).find('.agent-dtls').attr('data-link'); 
                agentContent = jQuery(this).find('.desc-text').text(); 

                jQuery('.ouragents-panel-popup').removeClass('	');
                jQuery('.ouragents-panel-popup').removeClass('active');

            if( leftCounter >= jQuery(window).width()){
                agentLeftPostion = agentLeftPostion - jQuery('.ouragents-panel-popup').width() + offsetLeft;

                jQuery('.ouragents-panel-popup').addClass('setImageReverese');
            }

        
            setTimeout(function(){
                
                jQuery('.ouragents-panel-popup').css('top', agentPosition - offsetHeight);
                jQuery('.ouragents-panel-popup').css('left', agentLeftPostion - offsetLeft);

                if( leftCounter >= jQuery(window).width()){
                    agentLeftPostion = agentLeftPostion - jQuery('.ouragents-panel-popup').width() + offsetLeft;

                    jQuery('.ouragents-panel-popup').addClass('setImageReverese');
                }

                /* Change Detals */
                jQuery('.ouragents-panel-popup .ouragents-panel-img').find('canvas').css('background-image','url('+agentPhotoUrl+')');
                jQuery('.ouragents-panel-popup .name-text h3').text( agentName ); 
                jQuery('.ouragents-panel-popup .name-text .job-text').text( agentPos ); 
                jQuery('.ouragents-panel-popup .desc-text').text( agentContent ); 
                jQuery('.ouragents-panel-popup a.site-button').attr( 'href', agentUrl ); 

                jQuery('.ouragents-panel-popup').addClass('active');
            }, 600);
        });

        jQuery(window).one('scroll', function(){
            jQuery('.ouragents-item canvas').each(function(){
                img = jQuery(this).attr('data-src');
                jQuery(this).css('background-image', 'url(' +img+ ')');
            });
        });

        jQuery('.ouragents-panel-popup .ouragents-panel-close').on('click', function() {
            jQuery('.ouragents-panel-popup').removeClass('active');
        });
    },

    headerInit() {
        var $header = $('header.header');

        function fixedHeader() {
            if ($(window).scrollTop() >= 120) {
                $('header').addClass('fixed');
            }
            else {
                $('header').removeClass('fixed');
            }
        } fixedHeader();

        $(window).on('scroll', function () {
            fixedHeader();
        });
    },

    start() {
        var sidemenu = $('.side-menu');

        var menu = {
            open: function () {
                setTimeout(function () {
                    sidemenu.addClass('active');
                    sidemenu.find('.wrap').addClass('active');
                }, 200);
            },
            close: function () {
                setTimeout(function () {
                    sidemenu.removeClass('active');
                    sidemenu.find('.wrap').removeClass('active');
                }, 200);
            }
        }

        $('.burger-icon').on('click', function(e) {
            e.preventDefault();
            menu.open();
        });

        $('.wrap-container').on('click', function(e) {
            e.stopImmediatePropagation();
        });

        $(sidemenu).on('click', function () {
            menu.close();
        });

        $('.chat').on('click', function() {
            if ($(this).hasClass('is-open')) {
                $(this).removeClass('is-open');
            } else {
                $(this).addClass('is-open');
            }
            $(this).parent().find('.chat-window').toggle('scale');
        });

        $(window).on('load resize orientationchange', function () {
            var windowWidth = $(window).width();

            if (windowWidth < 992) {
                menu.close();
            }
        });
    }
};

$(function() {
    app.init();
});