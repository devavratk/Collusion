// mYm Functions v 2.2 - brent@condensed.io
// last edited: Nov 23, 2018


// DOCUMENT READY FUNCTION: uses noConflict to work with other libraries
jQuery(document).ready(function($) {



/* ::: SHOW AND HIDE ::::::::::::::::::::::::::::::::: */

    // don't forget to put a class of hide on the child element directly after the 'make-link' element
	$(".toggle")
		.click(function(){
			var $this = $(this);
			if( $this.is('.box-on') ) {
				$this.removeClass('box-on');
				$this.addClass('box-off');
			} else {
				$this.removeClass('box-off');
				$this.addClass('box-on');
			}
    		return false;
    })
    
    //
    $('.btn').click(function(){
        $('.btn').removeClass('on').addClass('off');
        $(this).removeClass('off').addClass('on');
    });
    
	
});//<--- this is the end of the document ready function don't delete it