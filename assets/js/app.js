"use strict";

const app = {
    init() {
        app.start();
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