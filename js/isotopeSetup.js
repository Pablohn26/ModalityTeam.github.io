// external js: isotope.pkgd.js, imagesloaded.pkgd.js

$(document).ready( function() {
  // init Isotope after all images have loaded
  var $grid = $('.grid').isotope({
  		getSortData: {
    		name: '[controller]', // text from querySelector
		},
  		itemSelector: '.grid-item',
  		percentPosition: true,
  		sortBy : 'name',
  		sortAscending: 'false',
  		masonry: {
  			columnWidth: 50,
  		}
  });

  $grid.imagesLoaded().progress( function() {
   	$grid.isotope('layout');
  });

});
