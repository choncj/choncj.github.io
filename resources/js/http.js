"use strict";
import {
	uriAppPath,
	imgCarousel,
	docTitle,
	showBack,
	loadBreadCrumbs
} from './tools.js';
 
// Define global vars
let current_id_content = "home",
request,
$main_content,
path;
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
		
// Define available Pages
const main_content_templates = {
	'home' : './pages/home.html',
	'work' : './pages/work.html',
	'about' : './pages/about.html',
	'contact' : './pages/contact.html',
	'work/futurehaze': './pages/projects/futurehaze/futurehaze.html',
	'work/souletiquette': './pages/projects/souletiquette/souletiquette.html',
	'work/sushienzo': './pages/projects/sushienzo/sushienzo.html',
	'work/elcee': './pages/projects/elcee/elcee.html',
	'work/fhmag': './pages/projects/fhmag/fhmag.html',
	'404': './pages/404.html'
};
 
const _get = () => {
	// Get Url path
	path = uriAppPath();
	const pathLength = path.length === 1;
	// Changing path outcome to string
	const first_path =  pathLength ? path[0]:`${path[0]}/${path[1]}`;
	// Select Element to add content to
	$main_content = document.getElementById('main-content');
	// Check if http or activeX
	if (window.XMLHttpRequest) {request = new XMLHttpRequest();} 
	else if (window.ActiveXObject) {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	const nullContent = main_content_templates[first_path] != (null || undefined);
	current_id_content = nullContent ? first_path:'home';
	const selected = nullContent ? main_content_templates[first_path]:main_content_templates['404'];
	// console.log(selected, 'null content');
	// Make HTTP request 
	httpRequest(selected);

	// Change Title based on page
	const title = pathLength ? path[0]:path[1];
	docTitle(title);
	// Load BreadCrumbs with current Path
	showBack(selected);
	loadBreadCrumbs(nullContent ? path[0]:'home');	
};

// HTTP request function
const httpRequest = (path) => {
	request.onreadystatechange = getHTML;
	request.addEventListener("load", httpComplete);
	request.open('GET', path, true)
	request.send()
};

// Helper function
const getHTML = () => {
	if (request.readyState == 4) $main_content.innerHTML = request.responseText;
};

const httpComplete = (evt) => {
	gtag('js', new Date());
	gtag('config', 'G-XLC8BR01XL');
	if(path.includes('work')) {
		imgCarousel();
	}
}

const objects = () => {
	_get();
}

export default objects;