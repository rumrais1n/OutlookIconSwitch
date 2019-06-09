function importScript(URL) {
	var element = document.createElement('script');
	element.src = URL;
	document.body.appendChild(element);
}

importScript("https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js");
var $ = window.jQuery;

function switchImage(){
	var elements = document.getElementsByClassName('ms-Image.ms-Persona-image.image-112');
	
	elements.removeAttribute('src');
	elements.setAttribute('src', 'https://pbs.twimg.com/profile_images/877432098671403008/MGlKfUNp_400x400.png');
}