const loadImagesBtn = document.getElementById('loadImagesBtn');
const loadSecondaryImagesBtn = document.getElementById('loadSecondaryImagesBtn');

loadImagesBtn.addEventListener('click', fetchImages);
loadSecondaryImagesBtn.addEventListener('click', fetchSecondaryImages);

function fetchImages() {
  fetch('https://api.pexels.com/v1/search?query=cat', {
    headers: {
      Authorization: 'Bearer ml7lTc62yus88pSIf2ruac14jOWDV6lcwJEX5xNc8SuGP45j4OYqsTUF' 
    }
  })
    .then(response => response.json())
    .then(data => {
      const images = data.photos;
      const imageContainer = document.getElementById('imageContainer');
      imageContainer.innerHTML = '';
      const row = document.createElement('div');
      row.classList.add('row');
      images.forEach(image => {
        const col = document.createElement('div');
        col.classList.add('col-md-4'); 
        const cardHtml = `
          <div class="card mb-4 shadow-sm">
            <img src="${image.src.medium}" class="bd-placeholder-img card-img-top" style="width: 100%; height: 200px; object-fit: cover;" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${image.photographer}</h5>
              <p class="card-text">${image.width}x${image.height}</p>
              <div class="d-flex justify-content-between align-items-center mt-auto">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">Hide</button>
                </div>
                <small class="text-muted">${image.id}</small>
              </div>
            </div>
          </div>
        `;
        col.innerHTML = cardHtml;
        row.appendChild(col);
      });
      imageContainer.appendChild(row);
      addHideButtonListeners(); 
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
}

function fetchSecondaryImages() {
  fetch('https://api.pexels.com/v1/search?query=cat', {
    headers: {
      Authorization: 'Bearer ml7lTc62yus88pSIf2ruac14jOWDV6lcwJEX5xNc8SuGP45j4OYqsTUF' 
    }
  })
    .then(response => response.json())
    .then(data => {
      const images = data.photos;
      const imageContainer = document.getElementById('imageContainer');
      imageContainer.innerHTML = '';
      const row = document.createElement('div');
      row.classList.add('row');
      images.forEach(image => {
        const col = document.createElement('div');
        col.classList.add('col-md-4'); 
        const cardHtml = `
          <div class="card mb-4 shadow-sm">
            <img src="${image.src.medium}" class="bd-placeholder-img card-img-top" style="width: 100%; height: 200px; object-fit: cover;" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${image.photographer}</h5>
              <p class="card-text">${image.width}x${image.height}</p>
              <div class="d-flex justify-content-between align-items-center mt-auto">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">Hide</button>
                </div>
                <small class="text-muted">${image.id}</small>
              </div>
            </div>
          </div>
        `;
        col.innerHTML = cardHtml;
        row.appendChild(col);
      });
      imageContainer.appendChild(row);
      addHideButtonListeners(); 
    })
    .catch(error => {
      console.error('Error fetching secondary images:', error);
    });
}

function addHideButtonListeners() {
  const hideButtons = document.querySelectorAll('.hide-btn');
  hideButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      card.style.display = 'none'; 
    });
  });
}
