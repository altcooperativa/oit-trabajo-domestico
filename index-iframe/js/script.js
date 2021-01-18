window.addEventListener( 'load', function() {
	var hamburgerButton = document.getElementById( 'hamburger-button');

	hamburgerButton.addEventListener( 'click', function() {
		document.body.classList.toggle( 'hamburger-menu-active' );
	} );
} );
