
$('.knoppen').each( function() {
	var ditKnopje = $(this);
	var nuKnop = ditKnopje.find('li.actief');
    console.log(nuKnop);
	var link = nuKnop.find('a');
	var actiefPaneel = $(link.attr('href'));
	
	ditKnopje.on('click', 'a', function(e){
		e.preventDefault();
		var link = $(this);
// 			alert(link.attr('href'));
		var beoogdID = this.hash;
//  			alert(beoogdID);
		if(beoogdID && !link.parent().is('.actief')){
			actiefPaneel.removeClass('actief');
			nuKnop.removeClass('actief');
			
			actiefPaneel = $(beoogdID).addClass('actief');
			nuKnop = link.parent().addClass('actief');
		}
	})
});
// unobrusive weghalen van niet actieve vensters
$('.paneel').css('display','none')