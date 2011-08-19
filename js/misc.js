$(document).ready(function(){
	$('.active, article.bennett, article.anson').show();
	
	// Navigation - Display next set of thumbs
	$('.next').click(function(e){
		e.preventDefault();
		var current = $('.active');
		
		if($(current).hasClass('last-active')){
			var next = $('.first-active');
		} else {
			var next = $('.active').next();
		}
		
		$(current).removeClass('active').hide();
		$(next).addClass('active').show();
	});
	
	// Navigation - Display previous set of thumbs
	$('.prev').click(function(e){
		e.preventDefault();
		var current = $('.active');
		
		if($(current).hasClass('first-active')){
			var next = $('.last-active');
		} else {
			var next = $('.active').prev();
		}
		
		$(current).removeClass('active').hide();
		$(next).addClass('active').show();
	});
	
	// Information - Display park/card facts
	$('.park-nav ul li img, .card-nav ul li img').click(function(e){
		e.preventDefault();
		$('article').hide();
		var imgName = $(this).attr('src').split("/").pop();
		var articleInfo = imgName.substring(0, imgName.length-4).substring(5);
		
		var nameTitle = $('article.'+ articleInfo).find('span:first-child').text();
		var yearSub = $('article.'+ articleInfo).find('span:nth-child(2)').text();
		
		$('.name-title').text(nameTitle);
		$('.year-sub').text(yearSub);	
		$('article.'+ articleInfo).show();
		
		// Parks
		$('.header-img').attr('src', 'imgs/parks/'+ articleInfo +'.jpg');
		$('hgroup').attr('class', articleInfo);
		$('hgroup.shibe .name-title').replaceWith('<h1 class="name-title">Shibe Park <span>(renamed Connie Mack Stadium)</span></h1>');
		
		//Cards 
		$('.front').attr('src', 'imgs/cards/'+ articleInfo +'frnt.jpg');
		$('.back').attr('src', 'imgs/cards/'+ articleInfo +'back.jpg');
	});

});