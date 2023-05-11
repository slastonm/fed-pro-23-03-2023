// document.querySelector => $('')
$(document).ready(function() {
    $('h1').text('Hello query');
    $('#text').text('Query selector');
    // $('.active').nextAll().text('Active query');
    // $('.active').next().text('Active query');
    // $('.active').prevAll().text('Active query');
    let liParnt = $('.active').parents();
    let liParent = $('.active').parentsUntil("div");
    console.log(liParent);
    $('li').slice(2,6).text('Active query!');

    let activeEl = $('.active');
    // activeEl.on("click", function(){
    //     activeEl.css({
    //         "border":"3px solid red",
    //         "background":"black",
    //         "color":"white"
    //     })
    // });
    activeEl.on({
        click:function(){
            activeEl.css({
                "border":"3px solid red",
                "background":"black",
                "color":"white"
            })
        },
        mouseover:function(){
            activeEl.css({
                "border":"3px solid red",
                "background":"red",
                "color":"white"
            })
        },
        mouseout:function(){
            activeEl.css({
                "border":"3px solid red",
                "background":"green",
                "color":"white"
            })
        }
    });
    // $( "button" ).on( "click", function() {
    //     $( "ul" ).slideToggle( "fast", function() {
    //       // Animation complete.
    //     });
    // })
    $( "button" ).on( "click", function() {
        $( "ul" ).fadeOut( "slow", function() {
          // Animation complete
        });
    });
    $( ".show" ).on( "click", function() {
        $( "ul" ).fadeIn( "slow", function() {
          // Animation complete
        });
    });
    $('.your-class').slick();

});