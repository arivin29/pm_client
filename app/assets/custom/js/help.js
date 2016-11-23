var WindowTinggi = $(window).height();
var NavBarTinggi = $('.navbar-header').height() ;
var WindowLebar = $(window).width() ;
var SidebarLebar = $('.sidebar').width() ;

$('ul#page-menu li').click(function()
{
    $('ul#page-menu li > a').removeClass('active');
    $(this).children('a').addClass('active');
    console.log("ASdsa");

})

function Melayang()
{
    $('.widget-melayang').width(WindowLebar*0.8 - SidebarLebar );
    $('.widget-melayang .panel-body').height(WindowTinggi - NavBarTinggi - 120);
}

function formAutoLoad()
{
    if ( $( ".select2" ).length ) {
        // $(".select2").select2();
    }

    if($('.form-content').length)
    {
        var tinggi = $('.hitam-popup').height();
        $('.form-content').height(tinggi - 200);
    }

}

function errorView(pesan)
{
    console.log("error bro");
}

var count_hari = function(start,end) {
    var hari = (end - start) / (1000 * 60 * 60 * 24);
    return Math.round(hari);
};
