function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.951984, -46.327441),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
	var myPosition = new google.maps.LatLng(-23.9521299,-46.3277627,21);
	var mapa = new google.maps.Map(document.getElementById('mapa'), mapOptions);
	var marker = new google.maps.Marker({position: myPosition});

marker.setMap(mapa);
};

//Filtra os projetos selecionados
var projetosFilter  = (value)=>{
    var _addAtivo = (value)=>{
        (value === 'all')? value = 'todos os trabalhos' : '' ; 
        $('.ativo').attr('class','');
        $('#nav-comments > ul > li > a').each(function(){
                if($(this).attr('title') === value.toUpperCase()){
                    $(this).addClass('ativo');
                }
        });
    }
    var _toggleFilter = (value)=>{
        //Adiciona a classe Ativo
           _addAtivo(value);

        //Exibe todos
        if(value === 'all'){
           $('.projeto-item').css('display','block');
           return;
        }
        //Deixa todos invisivel
        $('.projeto-item').css('display','none'); 

        //Exibe Somente os iguais a data-type
        $('.projeto-item').each(function() {
            if($(this).attr('data-type') === value){
                $(this).css('display','block');
            }
        });   
    }
    _toggleFilter(value);
};

//Control the scroll-Up Button  
$('.scroll-up, .scroll-btm-top').click(()=>{
    $('body').animate({scrollTop:0},1500);
});
$(window).scroll( (event) =>{

	//Posicao atual do Scroll
	var scroll = $(window).scrollTop();
   //Exibe se logne do bottom ou do top
    if (scroll > 100 && !($(window).scrollTop() + $(window).height() > $(document).height() - 200)) {
    	$('.scroll-up')
    	 				.fadeIn(600)
    	 				.addClass('ativo-scroll');//classe do css para exibir a nav
    }
    //Caso contrario ele esconde o scroll-nav
    else{
	   		$('.scroll-up')
    						.fadeOut(600)
    						.attr('class','scroll-up');//Seta nav como oculta
    }
});
//hover circle effect
$('.gp').on('mouseenter mouseleave',function(){
    if($(this).children().children().attr('class').split(' ')[1] === 'fa-thumbs-o-up' ){
        $(this).children().children().toggleClass('fa-flip-horizontal');
    }
    else{
        $(this).children().children().toggleClass('fa-spin');
    }
});
