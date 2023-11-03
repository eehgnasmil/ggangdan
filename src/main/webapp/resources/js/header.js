$(document).ready(function() {
    $('.menu-icon').on('click',function() {
        var $categoryMenu = $('.categorymenu');

        if ($categoryMenu.hasClass('hidden')) {
            $categoryMenu.removeClass('hidden');
            $categoryMenu.animate({ width: '300px' }, 300);
        } else {
            $categoryMenu.animate({ width: '0px' }, 300, function() {
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
