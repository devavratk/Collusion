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
    

/* ::: SCROLL TO ELEMENTS ::::::::::::::::::::::::::::::::: */

// L I N K //  http://andrewhenderson.me/tutorial/jquery-sticky-sidebar/
	
	// selector for the links you want to activate, adding class of jumplink but you can add more by comma separating them
	// the links need to have a hash that leads to an element on the page with the same ID (which is how you probably makred it up right)
	$('.jumplink').click(function(){
	
		var el = $(this).attr('href');
		var elWrapped = $(el);
		
		scrollToDiv(elWrapped,40);
		return false;
		
	});
		
	function scrollToDiv(element,navheight){
		
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		
		$('body,html').animate({
		scrollTop: totalScroll
		}, 500);
	}
    

/* ::: POPUP LINKS ::::::::::::::::::::::::::::::::: */
	$('.popup').attr('target', '_blank');


    

	
});//<--- this is the end of the document ready function don't delete it

