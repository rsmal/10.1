'use strict';

var carouselData = [{
              text: 'Lorem ipsum ',
              image: 'https://tinyurl.com/ydfh9r2x',
              id: 'carousel-cell1',
              description: ' <p>Lorem ipsum.</p> <img src="http://via.placeholder.com/400x200" alt="Photo placeholder"> <p>Dolor sit.</p>'
          }, {
              text: 'Lorem ipsum 1',
              image: 'https://tinyurl.com/ycpsddow',
              id: 'carousel-cell2',
              description: ' <p>Lorem ipsum.</p> <img src="http://via.placeholder.com/400x200" alt="Photo placeholder"> <p>Dolor sit.</p>'
          }, {
              text: 'Lorem ipsum 2',
              image: 'https://tinyurl.com/y8fahhnp',
              id: 'carousel-cell3',
              description: '<p>Lorem ipsum.</p> <img src="http://via.placeholder.com/400x200" alt="Photo placeholder"> <p>Dolor sit.</p> '
          }, {
              text: 'Lorem ipsum 3',
              image: 'https://tinyurl.com/y8fahhnp',
              id: 'carousel-cell4',
              description: ' <p>Lorem ipsum.</p> <img src="http://via.placeholder.com/400x200" alt="Photo placeholder"> <p>Dolor sit.</p>'
          }, {
              text: 'Lorem ipsum 4',
              image: 'https://tinyurl.com/ydfh9r2x',
              id: 'carousel-cell5',
              description: ' <p>Lorem ipsum.</p> <img src="http://via.placeholder.com/400x200" alt="Photo placeholder"> <p>Dolor sit.</p>'
          }];



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





// vanilla JS
var flkty = new Flickity( '.carousel', {
  hash: true,
  cellAlign: 'left'
});

var progressBar = document.querySelector('.progress-bar');

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
