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



/* function  classEndsWith */
/*  mchandler@riester.com  */
/****************************

Checks if the given elements CSS class(es) end with 
the given subString. Will be extended to check if 
the elements class starts with, contains, or ends 
with the given subString (with parameter to decide 
where to look).

****************************/

function classEndsWith(element, classSubString) {
    var regexp = new RegExp('(?:^|\\s)') + classSubString ); // RegExp checks if 

    return $((element || '*') + '[class$="' + classSubString + '"]').filter(function(){
        return regexp.test(this.className);
    });
};

/* function  classContains */
/*  mchandler@riester.com  */
/****************************

Checks if the given elements CSS class(es) contains 
the given substring in the position specified.

****************************/

function classContains(element, classSubString, position) {

    var regexp = new RegExp('(?:^|\\s)') + classSubString;

        if (position === 'begins') {
            
            return $((element || '*') + '[class^="' + classSubString + '"]').filter(function(){
                return regexp.test(this.className);
            });

        };

        if (position === 'contains') {
            
            return $((element || '*') + '[class^="' + classSubString + '"]').filter(function(){
                return regexp.test(this.className);
            });

        };

        if (position === 'endswith') {
            
            return $((element || '*') + '[class$="' + classSubString + '"]').filter(function(){
                return regexp.test(this.className);
            });

        };

};