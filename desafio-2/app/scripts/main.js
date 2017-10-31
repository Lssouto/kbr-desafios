$(document).ready(function(){

	(function(){
	  $('.multi-item-carousel .item').each(function(){
	    let itemToClone = $(this);

	    for (let i=1;i<4;i++) {
	      itemToClone = itemToClone.next();

	      // wrap around if at end of item collection
	      if (!itemToClone.length) {
	        itemToClone = $(this).siblings(':first');
	      }

	      // grab item, clone, add marker class, add to collection
	      itemToClone.children(':first-child').clone()
	        .addClass("cloned-item")
	        .appendTo($(this));
	    }
	  });
	}());

});