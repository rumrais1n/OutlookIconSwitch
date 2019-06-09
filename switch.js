function importScript(URL) {
	var element = document.createElement( 'script' );
	element.src = URL;
	document.body.appendChild( element );
}