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
	let flag = false;

	$('.navbar-toggle').on('click',function(){
		if(!flag)
		$('.navbar-body').animate({
			left: "0"
		},500,function(){
		  flag = true;	
		});
		else
		$('.navbar-body').animate({
			left: "-100%"
		},500,function(){
		 flag = false;	
		});
	});

	$(window).scroll( (event) =>{

		//Posicao atual do Scroll
		var scroll = $(window).scrollTop();
	   //Exibe se logne do bottom ou do top
	    if (scroll > 100 ) {
	    	$("#header").addClass("scroll");
				    	
	    }
	    //Caso contrario ele esconde o scroll-nav
	    else{
	   		$("#header").removeClass("scroll");
	    }
	});
});

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.951984, -46.327441),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
	var myPosition = new google.maps.LatLng(-23.9521299,-46.3277627,21);
	var mapa = new google.maps.Map(document.getElementById("mapa"), mapOptions);
	var marker = new google.maps.Marker({position: myPosition});

marker.setMap(mapa);
};