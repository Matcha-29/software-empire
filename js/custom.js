(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();
	

	var tinySdlier = function() {

		var heroSlider = document.querySelectorAll('.hero-slide');
		var propertySlider = document.querySelectorAll('.property-slider');
		var imgPropertySlider = document.querySelectorAll('.img-property-slide');
		var testimonialSlider = document.querySelectorAll('.testimonial-slider');
		

		if ( heroSlider.length > 0 ) {
			var tnsHeroSlider = tns({
				container: '.hero-slide',
				mode: 'carousel',
				speed: 700,
				autoplay: true,
				controls: false,
				nav: false,
				autoplayButtonOutput: false,
				controlsContainer: '#hero-nav',
			});
		}


		if ( imgPropertySlider.length > 0 ) {
			var tnsPropertyImageSlider = tns({
				container: '.img-property-slide',
				mode: 'carousel',
				speed: 700,
				items: 1,
				gutter: 30,
				autoplay: true,
				controls: false,
				nav: true,
				autoplayButtonOutput: false
			});
		}

		if ( propertySlider.length> 0 ) {
			var tnsSlider = tns({
				container: '.property-slider',
				mode: 'carousel',
				speed: 700,
				gutter: 30,
				items: 3,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: '#property-nav',
				responsive: {
					0: {
						items: 1
					},
					700: {
						items: 2
					},
					900: {
						items: 3
					}
				}
			});
		}


		if ( testimonialSlider.length> 0 ) {
			var tnsSlider = tns({
				container: '.testimonial-slider',
				mode: 'carousel',
				speed: 700,
				items: 3,
				gutter: 50,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: '#testimonial-nav',
				responsive: {
					0: {
						items: 1
					},
					700: {
						items: 2
					},
					900: {
						items: 3
					}
				}
			});
		}
	}
	tinySdlier();

	// ... kode lain tetap sama ...

const eventsData = {
	events: [
	  { id: 1, title: "Turnamen Futsal Antar SMA", date: "24 Maret 2024", image: "images/adat.jpg", class: "GOR Padjajaran", category: "event" },
	  { id: 2, title: "Charity Football Match", date: "1 April 2024", image: "images/alun2.jpg", class: "Stadion Siliwangi", category: "achievement" },
	  { id: 3, title: "Random Event", date: "15 April 2024", image: "images/diramalam.jpg", class: "Venue Random", category: "moment" },
	  { id: 4, title: "Charity Football Match", date: "1 April 2024", image: "images/gogo.jpg", class: "Stadion Siliwangi", category: "achievement" },
	  { id: 5, title: "Random Event", date: "15 April 2024", image: "images/vitamin.jpg", class: "Venue Random", category: "moment" },
	  { id: 6, title: "Charity Football Match", date: "1 April 2024", image: "images/lbb.jpg", class: "Stadion Siliwangi", category: "achievement" },
	  { id: 7, title: "Random Event", date: "15 April 2024", image: "images/pahlawanle.jpg", class: "Venue Random", category: "moment" },
	],
  };
  
  function renderEvents(event, category) {
	// Update active button state
	const buttons = document.querySelectorAll('.filter-btn');
	buttons.forEach(btn => btn.classList.remove('active'));
	if (event && event.target) {
	  event.target.classList.add('active');
	}
  
	// Filter events based on category
	const filteredEvents = category === 'all' 
	  ? eventsData.events 
	  : eventsData.events.filter(evt => evt.category === category);
  
	// Generate HTML for filtered events
	const container = document.getElementById('events-container');
	if (container) {
	  container.innerHTML = filteredEvents.map(evt => `
		<div class="col-lg-4 col-md-6 mb-4">
		  <div class="property-item">
			<div class="img">
			  <img src="${evt.image}" alt="${evt.title}" class="img-fluid popup-image" onclick="openImagePopup(this.src)" />
			</div>
			<div class="property-content">
			  <div class="event-date mb-2">
				<span>${evt.date}</span>
			  </div>
			  <div>
				<h3 class="event-title mb-2">${evt.title}</h3>
				<span class="location d-block mb-3">
				  <i class="icon-location-arrow me-2"></i>
				  ${evt.class}
				</span>
			  </div>
			</div>
		  </div>
		</div>
	  `).join('');
	}
  }
  
  // Initialize with all events when page loads
  document.addEventListener('DOMContentLoaded', () => {
	renderEvents(null, 'all');
  });
	  

})()