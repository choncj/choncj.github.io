const uriAppPath = () => {
	let path = window.location.hash.substring(1);
	if(path)	{
		path = path.split("/");
		while (path.length && path[0].length == 0) {
			path.shift();
		}
		return path;
	} else {
		return ['home']
	};
};

// Function, turns string in to appendable element
const strToElement = (htmlStr) => {
	const fragment = document.createRange().createContextualFragment(htmlStr);
	return fragment;
};

const showBack = (selected) => {
	const $backBtn = document.getElementById('back-button');
	
	if(selected.includes('home')|| selected.includes('404')){
		$backBtn.style.opacity = 0;
	} else {
		$backBtn.style.opacity = 1; 
	}
};

const imgCarousel = () => {
	// Select all slides
	const $slides = document.querySelectorAll(".slide");

	// loop through slides and set each slides translateX
	$slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${indx * 100}%)`;
	});
	
	// select next slide button	// select next slide button
	const $prevSlide = document.querySelector(".btn-prev"),
	$nextSlide = document.querySelector(".btn-next"),
	$img = document.querySelectorAll('.slider .slide img'),
	$imageView = document.querySelector('#image-view');
	
	// current slide counter
	// maximum number of slides
	let curSlide = 0, maxSlide = $slides.length - 1;
	
	// add event listener and navigation functionality
	$nextSlide.addEventListener("click", function () {
		// check if current slide is the last and reset current slide
		curSlide === maxSlide ? curSlide=0:curSlide++;
		//   move slide by -100%
		$slides.forEach((slide, indx) => {
			slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
		});
	});

	// add event listener and navigation functionality
	$prevSlide.addEventListener("click", function () {
		// check if current slide is the first and reset current slide to last
		curSlide === 0 ? curSlide=maxSlide: curSlide--;		
		//   move slide by 100%
		$slides.forEach((slide, indx) => {
			slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
		});
	});

	// add event listener for IMG resize
	$img.forEach(img => {
		img.addEventListener('click', function() {
			$imageView.style.backgroundImage = 'url(' + img.src + ')';
			$imageView.style.display = 'block';
		});
	});

};

const docTitle = (string) => {
	let newTitle = `Chon Lewis - ${string[0].toUpperCase() + string.substring(1)}`;
	let defaultTitle = `Chon Lewis - Home`;
	document.title = string.length > 0 ? newTitle:defaultTitle;
};

// Bread Crumb Function
const loadBreadCrumbs = (firstPath) => {
	const pathArray = uriAppPath();
	let $breadContainer = document.getElementsByClassName('breadcrumbs')[0],
	$a;

	if($breadContainer.length > 0){ $breadContainer.clearChildren()};
	$breadContainer.innerHTML = '<a class="breadcrumb-item" data-id_content="home" href="#home">home</a>';
	
	pathArray.forEach(function(element, index) {
		if(index > 0){
			$a = '<a class="breadcrumb-item " data-id_content="' + element + '" href="#' + firstPath + '/' + element + '">' + element + '</a>';
		} else {
			$a = '<a class="breadcrumb-item " data-id_content="' + element + '" href="#' + element + '">' + element + '</a>';
		}
		if(pathArray[0] != 'home') {
			$breadContainer.appendChild(strToElement($a));
		}
	}, this);
}

 
export {
	uriAppPath,
	imgCarousel,
	docTitle,
	showBack,
	loadBreadCrumbs
};