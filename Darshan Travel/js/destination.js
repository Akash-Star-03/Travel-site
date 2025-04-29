document.addEventListener('DOMContentLoaded', function() {

    // Mock API Data
    const destinations = [
      {
        id: 1,
        name: "Vaishno Devi Tour Package",
        location: "Jammu → Katra → Patnitop → Nathatop",
        nights: "3 Nights / 4 Days",
        price: 30000,
        image: "/images/image (11).png",
        popularity: 90,
        type: "Family"
      },
      {
        id: 2,
        name: "Kashmir Family Trip",
        location: "Srinagar → Gulmarg → Pahalgam",
        nights: "5 Nights / 6 Days",
        price: 45000,
        image: "/images/image (11).png",
        popularity: 95,
        type: "Honeymoon"
      },
      {
        id: 3,
        name: "Adventure in Ladakh",
        location: "Leh → Nubra Valley → Pangong Lake",
        nights: "6 Nights / 7 Days",
        price: 60000,
        image: "/images/image (11).png",
        popularity: 85,
        type: "Adventure"
      }
    ];
  
    const grid = document.getElementById('destinationsGrid');
    const applyFilterBtn = document.getElementById('applyFilterBtn');
    function renderDestinations(data) {
      grid.innerHTML = '';
      data.forEach(dest => {
        grid.innerHTML += `
          <div class="destination-card">
            <img src="${dest.image}" alt="${dest.name}">
            <div class="destination-info">
              <h3>${dest.name}</h3>
              <p>${dest.nights}</p>
              <p>${dest.location}</p>
              <div class="price">Rs.${dest.price}</div>
              <div class="actions">
                <a href="/detail.html" class="view-page-btn">View Page</a>
                <button class="book-now-btn" data-destination="${dest.name}">Book Now</button>
              </div>
            </div>
          </div>
        `;
      });
    
      // Add event listeners to Book buttons
      document.querySelectorAll('.book-now-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          const destinationName = e.target.getAttribute('data-destination');
          openBookingForm(destinationName);
        });
      });
    }
    

  
    function applyFilters() {
      let selectedTypes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(cb => cb.value);
  
      let sortBy = document.getElementById('sortOptions').value;
      
      let filtered = destinations.filter(dest => {
        return selectedTypes.length === 0 || selectedTypes.includes(dest.type);
      });
  
      if (sortBy === 'price') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'popularity') {
        filtered.sort((a, b) => b.popularity - a.popularity);
      }
  
      renderDestinations(filtered);
    }
  
    applyFilterBtn.addEventListener('click', applyFilters);
  
    // Initial load
    renderDestinations(destinations);
  
  });
  
  function openBookingForm(destinationName) {
    document.getElementById('destination').value = destinationName;
    const formOverlay = document.getElementById('bookingFormOverlay');
    formOverlay.classList.remove('hidden');
    formOverlay.classList.add('visible');
  }
  
  window.onload = function() {
    document.getElementById('cancelFormBtn').addEventListener('click', function() {
      const formOverlay = document.getElementById('bookingFormOverlay');
      formOverlay.classList.remove('visible');
      formOverlay.classList.add('hidden');
    });
  
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Booking submitted successfully!');
      const formOverlay = document.getElementById('bookingFormOverlay');
      formOverlay.classList.remove('visible');
      formOverlay.classList.add('hidden');
    });
  };
  
  