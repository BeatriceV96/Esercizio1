// JavaScript

document.addEventListener("DOMContentLoaded", function () {
  const productId = new URLSearchParams(window.location.search).get(
    "productId"
  );
  getProductInfo(productId);
});

const getProductInfo = (productId) => {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkY2ZhMzgxODQ0MjAwMTUzNzU4NzciLCJpYXQiOjE3MTUzMjY4ODMsImV4cCI6MTcxNjUzNjQ4M30.uYElmLCgaztX3S4T3C__yta-ZlB60r8b4X7_DY10py0",
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Errore nel caricamento delle informazioni del prodotto"
        );
      }
    })
    .then((product) => {
      populateProductCard(product);
    })
    .catch((error) => {
      console.error("ERRORE:", error);
    });
};

const populateProductCard = (product) => {
  const productCard = document.getElementById("product-info");
  productCard.innerHTML = `
  <div class="card-body overflow-auto">
    <img src="${product.imageUrl}" class="card-img-top" alt="...">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <p class="card-text">Brand: ${product.brand}</p>
    <p class="card-text">Price: ${product.price}</p>
    <button class="btn btn-danger delete-btn" data-product-id="${product._id}">Delete</button>
    <a href="info.html?productId=${product._id}" class="btn btn-info">INFO</a>
    <button class="btn btn-primary edit-btn" data-product-id="${product._id}">Modifica</button>
    <div id="edit-form-container" style="display: none;">
      <!-- Form di modifica -->
      <form id="edit-form">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" value="${product.name}">
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea class="form-control" id="description">${product.description}</textarea>
        </div>
        <div class="mb-3">
          <label for="brand" class="form-label">Brand</label>
          <input type="text" class="form-control" id="brand" value="${product.brand}">
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input type="number" class="form-control" id="price" value="${product.price}">
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
  `;
  
  const editButton = productCard.querySelector('.edit-btn');
  editButton.addEventListener('click', () => {
    const editFormContainer = productCard.querySelector('#edit-form-container');
    editFormContainer.style.display = 'block';
  });
};
