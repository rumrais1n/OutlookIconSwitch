function importScript(URL) {
	var element = document.createElement('script');
	element.src = URL;
	document.body.appendChild(element);
}

function switchImage() {
	importScript("https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js");

	$('ms-Persona-image').children('img').attr('src', 'https://pbs.twimg.com/profile_images/1100054151692574720/Rt0-3Wmx_400x400.png');
}