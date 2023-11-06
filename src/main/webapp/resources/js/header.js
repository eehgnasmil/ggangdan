$(document).ready(function() {
    $('.menu-icon').on('click',function() {
        var $categoryMenu = $('.categorymenu');

        if ($categoryMenu.hasClass('hidden')) {
            $categoryMenu.removeClass('hidden');
            $categoryMenu.animate({ left: '0' }, 300);
        } else {
            $categoryMenu.animate({ left: '-300px' }, 300, function() {
                $categoryMenu.addClass('hidden');
            });
        }
    });

    $('.addcategory').on('click',function() {
        $('.newcategoryalert').addClass('show');
    });

    $('.cancelbtn').on('click',function() {
        $('.newcategoryalert').removeClass('show');
    })
})
