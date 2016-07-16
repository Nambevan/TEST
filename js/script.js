

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
function ChangeOpac (el) {
    el.previousElementSibling.style.opacity = "0";
}

$(document).ready(function(){
    //for footer icon
        $('.open_close_menu').click(function(){
            $('.nav_block>ul').toggle(100);
            $('.nav_block>label').css('border-bottom','1px solid #e3e3e3');
            $('.open_close_menu').toggleClass('dop_class');
        });
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

    //for menu header

    $('.menu_item_1').click(function(){
        $('.sub_menu_1').hide(200);
        $('.sub_menu_1').show(200);
        $('.sub_menu_4').hide(200);
        $('.menu_item_1').addClass('active');
        $('.menu_item_2').removeClass('active');
    });
    $('.menu_item_2').click(function(){
        $('.sub_menu_4').hide(200);
        $('.sub_menu_4').show(200);
        $('.sub_menu_1').hide(200);
        $('.menu_item_2').addClass('active');
        $('.menu_item_1').removeClass('active');
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
