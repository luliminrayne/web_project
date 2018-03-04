$(function(){
    //动态下拉菜单
    var menu = $("#nav1 li");
    menu.each(function(i){
        if($(this).children().is("ul")){
            $(this).mouseover(function(){
                $(this).children("ul").show();
            });
            $(this).mouseout(function(){
                $(this).children("ul").hide();

            });
        }
    });

    var menu2 = $(".links div");
    menu2.each(function (j) {
        if($(this).children().is(".hidden")){
            $(this).mouseover(function () {
                $(this).children(".hidden").show();
            });
            $(this).mouseout(function () {
                $(this).children(".hidden").hide();
            });
        }
    });

});