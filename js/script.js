
$(document).ready(function(){
    //for menu header
    $('.menu_item_1').click(function(){
        $('.sub_menu_4').hide(100);
        $('.sub_menu_1').toggle(100);
        $('.menu_item_1').addClass('active');
        $('.menu_item_2').removeClass('active');
    });
    $('.menu_item_2').click(function(){
        $('.sub_menu_1').hide(100);
        $('.sub_menu_4').toggle(100);
        $('.menu_item_2').addClass('active');
        $('.menu_item_1').removeClass('active');
    });

    //for sub menu header

    $('.sub_item_1').click(function(){
        $('.sub_menu').hide();
        $('.sub_menu_2').slideToggle(100);
    });
    $('.sub_item_2').click(function(){
        $('.sub_menu').hide();
        $('.sub_menu_3').slideToggle(100);
    });
    $('.sub_item_3').click(function(){
        $('.sub_menu').hide();
        $('.sub_menu_5').slideToggle(100);
    });
    $('.sub_item_4').click(function(){
        $('.sub_menu').hide();
        $('.sub_menu_6').slideToggle(100);
    });
    $('.sub_item_5').click(function(){
        $('.sub_menu').hide();
        $('.sub_menu_7').slideToggle(100);
    });
    $('.sub_item_6').click(function(){
        $('.sub_menu').hide();
        $('.sub_menu_8').slideToggle(100);
    });
    $('.sub_item_7').click(function(){
        $('.sub_menu').hide();
        $('.sub_menu_9').slideToggle(100);
    });

    //for hidden menu
    $('.hidden_menu').click(function(){
        $('.microsoft_menu').slideToggle(500);
    });

    //for search
    $('.hidden_search').click(function(){
        $('.search').slideToggle(200);
    });

});


//for inputs

function ChangeOpac (el) {
    el.previousElementSibling.style.opacity = "0";
}
$(document).ready(function(){
    //for input opacity
    $('#signup_name').click(function(){
        $('.name').css('opacity', '.5');
    });
    $('#signup_email').click(function(){
        $('.email').css('opacity', '.5');
    });
    $('#signup_pass').click(function(){
        $('.pass').css('opacity', '.5');
    });

});


//for footer
function showNav (el) {
    if(el.nextElementSibling.style.display === "none") {
        el.nextElementSibling.style.display = "block";
        el.style.borderBottom  = "none";
        el.previousElementSibling.classList.add("dop_class");
    } else {
        el.nextElementSibling.style.display = "none";
        el.style.borderBottom  = "1px solid #e3e3e3";
        el.previousElementSibling.classList.remove("dop_class");
    }
}
$(document).ready(function(){
    //for footer icon
    $('.open_close_menu').click(function(){
        $('.nav_block>ul').toggle(100);
        $('.nav_block>label').css('border-bottom','1px solid #e3e3e3');
        $('.open_close_menu').toggleClass('dop_class');
    });
});
