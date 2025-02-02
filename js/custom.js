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
	  { id: 1, title: "Hari Pahlawan", date: "24 Maret 2024", image: "images/adat.jpg", class: "XI RPL", category: "event" },
	  { id: 2, title: "Outing Class 2023", date: "8 Maret 2023", image: "images/alun2.jpg", class: "X RPL", category: "achievement" },
	  { id: 3, title: "Tour Dira Park", date: "25 Mei 2024", image: "images/diramalam.jpg", class: "XI RPL", category: "moment" },
	  { id: 4, title: "Perayaan Pasca Juara 2 PBB", date: "24 Mei 2023", image: "images/gogo.jpg", class: "X RPL", category: "event" },
	  { id: 5, title: "Vitamin", date: "15 April 2024", image: "images/vitamin.jpg", class: "XI RPL", category: "moment" },
	  { id: 6, title: "Lomba PBB", date: "24 Mei 2023", image: "images/lbb.jpg", class: "X RPL", category: "achievement" },
	  { id: 7, title: "Lomba Drama Kolosal", date: "12 Juni 2024", image: "images/pahlawanle.jpg", class: "XI RPL", category: "moment" },
	  { id: 8, title: "Buka Bersama", date: "17 Mei 2024", image: "images/bukber.jpg", class: "XI RPL", category: "moment" },
	  { id: 9, title: "Tour Dira Park", date: "25 Mei 2024", image: "images/dira.jpg", class: "XI RPL", category: "moment" },
	  { id: 10, title: "Hari Guru 2024", date: "11 December 2023", image: "images/hariguru.jpg", class: "XI RPL", category: "moment" },
	  { id: 11, title: "Juara 1 Drama Kolosal dan Juara 3 Literasi", date: "14 Juni 2024", image: "images/juarale.jpg", class: "XI RPL", category: "achievement" },
	],
  };
  
function initializeEventFilters() {
	// Tambahkan event listener ke semua button filter
	const filterButtons = document.querySelectorAll('.filter-btn');
	
	filterButtons.forEach(button => {
	  button.addEventListener('click', function() {
		// Hapus class active dari semua button
		filterButtons.forEach(btn => btn.classList.remove('active'));
		// Tambah class active ke button yang diklik
		this.classList.add('active');
		
		// Ambil kategori dari data-category
		const category = this.getAttribute('data-category');
		
		// Filter dan tampilkan events
		const filteredEvents = category === 'all' 
		  ? eventsData.events 
		  : eventsData.events.filter(event => event.category === category);
		
		// Update tampilan
		// Update bagian di custom.js yang mengupdate tampilan event
const container = document.getElementById('events-container');
container.innerHTML = filteredEvents.map((event, index) => `
  <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${index % 3 * 100}">
    <div class="property-item">
      <div class="img">
        <img src="${event.image}" alt="${event.title}" class="img-fluid popup-image" onclick="openImagePopup('${event.image}')" />
      </div>a
      <div class="property-content">
        <div class="event-date mb-2">
          <span>${event.date}</span>
        </div>
        <div>
          <h3 class="event-title mb-2">${event.title}</h3>
          <span class="location d-block mb-3">
            <i class="icon-location-arrow me-2"></i>
            ${event.class}
          </span>
        </div>
      </div>
    </div>
  </div>
`).join('');
	  });
	});
  
	// Tampilkan semua event saat halaman dimuat
	document.querySelector('[data-category="all"]').click();
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
	initializeEventFilters();
  });
	  

})()