window.addEventListener( 'load', function() {
	var hamburgerButtons = document.getElementsByClassName('hamburger-button');

	for ( var i = 0; i < hamburgerButtons.length; i++ ) {
		hamburgerButtons[ i ].addEventListener( 'click', function() {
			if ( ! document.body.classList.contains( 'hamburger-menu-open' ) &&
			! document.body.classList.contains( 'hamburger-menu-closed' ) ) {
				document.body.classList.add( 'hamburger-menu-open' );
			} else {
				document.body.classList.toggle( 'hamburger-menu-open' );
				document.body.classList.toggle( 'hamburger-menu-closed' );
			}
		} );
	}

	var expandableImages = document.getElementsByClassName('img-expandable');

	for ( var i = 0; i < expandableImages.length; i++ ) {
		expandableImages[ i ].addEventListener( 'click', function( e ) {
			let expanded = document.getElementsByClassName('img-expanded');

			if ( ! expanded.length ) {
				this.classList.add('img-expanded');
				e.stopPropagation();
			}
		} );
	}

	document.addEventListener( 'click', function() {
		let expanded = document.getElementsByClassName('img-expanded');

		for (let index = 0; index < expanded.length; index++) {
			expanded[ index ].classList.remove('img-expanded');
		}
	} );
} );
