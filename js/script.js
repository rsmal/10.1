// vanilla JS
var flkty = new Flickity( '.carousel', {
  hash: true,
  cellAlign: 'left',
});

var flkty = new Flickity( '.carousel2', {
  hash: true,
  cellAlign: 'left',
});


var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});




	var templateList = document.getElementById('template-carousel-list').innerHTML;
	var templateItem = document.getElementById('template-carousel-item').innerHTML;
	
	// Następnie zoptymalizujemy drugą z nich, ponieważ tylko ona będzie wykonywana wielokrotnie. 	

	Mustache.parse(templateItem);
	
	// Teraz stworzymy zmienną, w której chcemy mieć kod HTML wszystkich produktów. 
	
	var listItems = '';
	
	/* Czas napisać pętlę, która dla każdego elementu z listy:
	1. wygeneruje kod HTML dla danego produktu, oraz
	2. doda ten wygenrowany kod HTML do zmiennej listItems. 
	
	Uwaga - zmienna productsData, której używamy poniżej, została zdefiniowana w kodzie HTML!
	*/
	
	for(var i = 0; i < productsData.length; i++){
		console.log(productsData);
		listItems += Mustache.render(templateItem, productsData[i]);
	}
	
	// Po wykonaniu pętli, zmienna listItems zawiera już kod HTML dla wszystkich produktów. Teraz wykorzystamy szablon templateList, aby wstawić produkty do wrappera listy. 
	
	var fullProductList = Mustache.render(templateList, {products: listItems});
	
	// I w pełni wyrenderowaną listę wyświetlimy na stronie: 
	
	results.insertAdjacentHTML('beforeend', fullProductList);
	