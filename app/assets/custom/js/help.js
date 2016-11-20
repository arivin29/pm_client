$('ul#page-menu li').click(function()
{
    $('ul#page-menu li > a').removeClass('active');
    $(this).children('a').addClass('active');
    console.log("ASdsa");

})
// init();
//
// function init(){
//     $('[load=content]').click(function(e){
//         e.preventDefault();
//
//         var url = $(this).attr('href');
//         console.log(url);
//         $('#content').load(base_url + 'part/' + url);
//     })
// }

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
