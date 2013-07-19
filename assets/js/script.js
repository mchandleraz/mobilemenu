$(function() {

    //set variables to determine if scripts for a particular environment need to be called.
    mobileEnvironment = 1;
    tabletEnvironment = 0;
    desktopEnvironment = 0;

    universalController();

    environmentChecker();
    $(window).resize(function(){
        environmentChecker();
    });
});

/**
 * environmentChecker()
 * Checks to see if Mobile, Tablet, or Desktop
 */
function environmentChecker() {
    console.log('environmentChecker fired');

    if ($(window).width() >= 960) {
        if (tabletEnvironment == 0){
            tabletEnvironment = 1;
            tabletController();
        }; //tabletcheck
        if (desktopEnvironment == 0){
            desktopEnvironment = 1;
            desktopController();
        }; //desktopcheck
        $('body').removeClass('mobile').removeClass('tablet').addClass('desktop');


    } else if ($(window).width() >= 600) {
        if (tabletEnvironment == 0){
            tabletEnvironment = 1;
            tabletController();
        }; //tabletcheck
        $('body').removeClass('mobile').removeClass('desktop').addClass('tablet');

    } else {
        $('body').removeClass('tablet').removeClass('desktop').addClass('mobile');
    }; //window.width

}; //environmentChecker


/**
 * universalController()
 * Run Universal Functions
 */
function universalController() {
    console.log('universalController Fired');
   
    

}; //universalController


/**
 * tabletController()
 * Run Tablet Functions
 */
function tabletController() {
    console.log('tabletController Fired');
    
}; //tabletController


/**
 * desktopController()
 * Run Desktop Functions
 */
function desktopController() {
    console.log('desktopController Fired');

}; //desktopController

/*

Toggle Menu

*/

$('#menu-toggle').click(function(){
    $('nav').toggle();
    $('#primary, header').toggleClass('menu-left'); // Combined the #primary and header into one object
});



/* Changes the class on the sort icons to highlight the users selection */
$('#nav-sort a').click(function(){
        
    var icon = $(this).children('i'); // Storing the icon element as a var for performance.
    var classOriginal = icon.attr('class'); // Getting the current class
    var classNotEmpty = classOriginal.split('-empty', 1); // Chopping "-empty" off and storing it in an array. ie: "icon-bookmark-empty" will become "icon-bookmark"
    
    $(this).siblings('.active').removeClass('active'); // Get all siblings that have the "active" class, and remove that class from them
    $(this).toggleClass('active'); // If the anchor that was clicked has the active class, remove it. If it doesn't have the class, add it.

    if ( $(this).hasClass('active') ) {

        if ( classOriginal.indexOf('-empty') != -1 ) { // If the icon has "-empty" in its class

            icon.removeClass(classOriginal).addClass(classNotEmpty[0]);

        };

    } else {

        if ( icon.hasClass(classNotEmpty[0]) && !icon.hasClass('icon-sort-by-attributes-alt') ) { // If the class does NOT contain "-empty"

            icon.removeClass(classNotEmpty[0]).addClass(classNotEmpty[0] + '-empty');

        };

    };

});

