// mYm Functions v 2.2 - brent@condensed.io
// last edited: Nov 23, 2018


// DOCUMENT READY FUNCTION: uses noConflict to work with other libraries
jQuery(document).ready(function($) {



/* ::: SHOW AND HIDE ::::::::::::::::::::::::::::::::: */

    // don't forget to put a class of hide on the child element directly after the 'make-link' element
	$(".toggle")
		.addClass('make-link') // make headings look like links
		.addClass('header-hidden')
		.click(function(){
			var $this = $(this);
			if( $this.is('.header-shown') ) {
				$this.next().slideToggle('normal');
				$this.removeClass('header-shown');
				$this.addClass('header-hidden');
			} else {
				$this.next().slideToggle('normal');
				$this.removeClass('header-hidden');
				$this.addClass('header-shown');
			}
    		return false;
    })
    
	
});//<--- this is the end of the document ready function don't delete it