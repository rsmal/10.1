// vanilla JS
var flkty = new Flickity( '.carousel', {
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


var templateList = document.getElementById('template-list').innerHTML;
var templateItem = document.getElementById('template-slide').innerHTML;
    Mustache.parse(templateItem);
 
    var listItems = '';
 
    for (var i = 0; i < carouselData.length; i++) {
        console.log(carouselData);
        listItems += Mustache.render(templateItem, carouselData[i]);
    }
 
    var fullProductList = Mustache.render(templateList, {carousel: listItems });
    result.insertAdjacentHTML('beforeend', fullProductList);