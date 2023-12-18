"use strict";

import Template from './http.js'; 

// On DOM loaded
document.addEventListener('DOMContentLoaded', () => {
	// load template Objects
	Template();

	// const elementArray = document.querySelectorAll('nav-btn');
	// elementArray.forEach((elem) => {
	// 	elem.addEventListener('click', function(event) {
	// 		event.preventDefault();
	// 		const wanted_content = event.target.dataset.idContent;
	// 		if (current_id_content != wanted_content) window.location.hash =  "#" + wanted_content;
	// 	});
	// })
	// console.log('test'); 
	window.addEventListener('popstate', Template);
})

window.addEventListener('load', async() => {
	console.log('on load');
	document.body.style.opacity = 1;
});

document.addEventListener('readystatechange', (event) => {
	console.log('state change'); 
});