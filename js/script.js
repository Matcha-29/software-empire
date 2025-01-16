// Image Popup Functions
function openImagePopup(imgSrc) {
    const popup = document.getElementById('imagePopup');
    const popupImg = document.getElementById('popupImage');
    popup.style.display = 'block';
    popupImg.src = imgSrc;

    // Prevent body scrolling when popup is open
    document.body.style.overflow = 'hidden';
  }

  function closeImagePopup() {
    document.getElementById('imagePopup').style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Close popup when clicking outside the image
  document.getElementById('imagePopup').addEventListener('click', function (e) {
    if (e.target === this) {
      closeImagePopup();
    }
  });

  // Close popup with escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeImagePopup();
    }
  });

  function renderEvents(category) {
    const fileJson = './js/event.json';
    const propertySlider = document.querySelector('.property-slider');
    const propertyItems = document.querySelectorAll('.property-item');
    let propertyItem = '';

    fetch(fileJson)
      .then((response) => response.json())
      .then((data) => {
        const filteredEvents = data.events.filter((event) => event.category === category);
        console.log(filteredEvents);
        
        propertyItems.forEach((item) => {
          item.remove();
        })

        filteredEvents.forEach((item) => {
          propertyItem += `
            <div class="property-item">
                <div class="img">
                  <img src="${item.image}" alt="Event" class="img-fluid popup-image"
                    onclick="openImagePopup(this.src)" />
                  
                </div>

                <div class="property-content">
                  <div class="event-date mb-2">
                    <span>${item.date}</span>
                  </div>
                  <div>
                    <h3 class="event-title mb-2">${item.title}</h3>
                    <span class="location d-block mb-3">
                      <i class="icon-location-arrow me-2"></i>
                      ${item.class}
                    </span>

                  </div>
                </div>
              </div>
          `

          propertySlider.innerHTML = propertyItem;
        })
      })
  }