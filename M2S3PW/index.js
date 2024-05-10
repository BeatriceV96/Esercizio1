const loadImages = (searchKeyword) =>
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkY2ZhMzgxODQ0MjAwMTUzNzU4NzciLCJpYXQiOjE3MTUzMjY4ODMsImV4cCI6MTcxNjUzNjQ4M30.uYElmLCgaztX3S4T3C__yta-ZlB60r8b4X7_DY10py0",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("ERRORE");
        }
      })

  
document.getElementById('year').innerText = new Date().getFullYear()

const generateProductCards = function (productsArray) {
  const row = document.getElementById('events-row')
  productsArray.forEach((product) => {
    const newCol = document.createElement('div')
    newCol.classList.add('col')
    newCol.innerHTML = `
    <div class="card h-100 d-flex flex-column">
    <img src="${product.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body d-flex flex-column justify-content-around">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.description}</p>
      <p class="card-text">Brand: ${product.brand}</p>
      <p class="card-text">Price: ${product.price}</p>
      <button class="btn btn-danger delete-btn" data-product-id="${product._id}">Delete</button>
      <a href="info.html?productId=${product._id}" class="btn btn-info">INFO</a>
    </div>
  </div>
      `
    row.appendChild(newCol)
  })


  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-product-id');
      deleteProduct(productId);
    });
  });


  const infoButtons = document.querySelectorAll('.info-btn');
  infoButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.location.href = "info.html";
    });
  });
}

const getProducts = function () {
  fetch('https://striveschool-api.herokuapp.com/api/product/', {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkY2ZhMzgxODQ0MjAwMTUzNzU4NzciLCJpYXQiOjE3MTUzMjY4ODMsImV4cCI6MTcxNjUzNjQ4M30.uYElmLCgaztX3S4T3C__yta-ZlB60r8b4X7_DY10py0",
      'Content-type': 'application/json', 
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response)
        return response.json()
      } else {
        throw new Error('Errore nella risposta del server')
      }
    })
    .then((array) => {
      console.log('ARRAY!', array)
      generateProductCards(array)
    })
    .catch((err) => {
      console.log('ERRORE!', err)
    })
}

const deleteProduct = function (productId) {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: 'DELETE',
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkY2ZhMzgxODQ0MjAwMTUzNzU4NzciLCJpYXQiOjE3MTUzMjY4ODMsImV4cCI6MTcxNjUzNjQ4M30.uYElmLCgaztX3S4T3C__yta-ZlB60r8b4X7_DY10py0",
      'Content-type': 'application/json', 
    },
  })
    .then((response) => {
      if (response.ok) {
        alert('Prodotto eliminato!');
        const productCard = document.querySelector(`[data-product-id="${productId}"]`).closest('.col');
        productCard.remove();
      } else {
        throw new Error('Errore nella rimozione del prodotto');
      }
    })
    .catch((err) => {
      console.log('ERRORE', err)
      alert(err)
    })
}

document.addEventListener('DOMContentLoaded', function() {
  getProducts();
  
  const submitProduct = function (e) {
    e.preventDefault()

    const nameInput = document.getElementById('name') 
    const descriptionInput = document.getElementById('description') 
    const brandInput = document.getElementById('brand') 
    const imageInput = document.getElementById('image') 
    const priceInput = document.getElementById('price') 

    const productFromForm = {
      name: nameInput.value,
      description: descriptionInput.value,
      brand: brandInput.value,
      imageUrl: imageInput.value,
      price: parseFloat(priceInput.value) 
    }

    console.log('PRODOTTO DA INVIARE ALLE API', productFromForm)

    let URL = 'https://striveschool-api.herokuapp.com/api/product'
    let methodToUse = 'POST'

    const productId = new URLSearchParams(location.search).get('productId');

    if (productId) {
      URL = `https://striveschool-api.herokuapp.com/api/product/${productId}`
      methodToUse = 'PUT'
    }

    fetch(URL, {
      method: methodToUse,
      body: JSON.stringify(productFromForm), 
      headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkY2ZhMzgxODQ0MjAwMTUzNzU4NzciLCJpYXQiOjE3MTUzMjY4ODMsImV4cCI6MTcxNjUzNjQ4M30.uYElmLCgaztX3S4T3C__yta-ZlB60r8b4X7_DY10py0",
        'Content-type': 'application/json', 
      },
    })
      .then((response) => {
        if (response.ok) {
          alert(`Prodotto ${productId ? 'modificato' : 'creato'}!`)
        } else {
          throw new Error('Errore nel salvataggio della risorsa')
        }
      })
      .catch((err) => {
        console.log('ERRORE', err)
        alert(err)
      })
  }
  
  document.getElementById('product-form').addEventListener('submit', submitProduct);
});
