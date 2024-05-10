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
  <div class="card w-100 h-100">
    <img src="${product.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body overflow-auto">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.description}</p>
      <p class="card-text">Brand: ${product.brand}</p>
      <p class="card-text">Price: ${product.price}</p>
      <button class="btn btn-danger delete-btn" data-product-id="${product._id}">Delete</button>
      <a href="info.html?productId=${product._id}" class="btn btn-info">INFO</a>
      <button class="btn btn-primary edit-btn" data-product-id="${product._id}">Modifica</button>
    </div>
  </div>
  `;
  
  const editButton = productCard.querySelector('.edit-btn');
  editButton.addEventListener('click', () => {
    handleEditButtonClick(product._id);
  });
};

const handleEditButtonClick = (productId) => {
  window.location.href = `edit.html?productId=${productId}`;
};
