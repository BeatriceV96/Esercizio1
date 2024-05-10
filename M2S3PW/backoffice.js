const getProductData = async (productId) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`);
    if (!response.ok) {
      throw new Error("Errore nel recupero dei dettagli del prodotto");
    }
    const product = await response.json();
    console.log('DETTAGLI RECUPERATI', product);

    document.getElementById('name').value = product.name;
    document.getElementById('description').value = product.description;
    document.getElementById('brand').value = product.brand;
    document.getElementById('image').value = product.imageUrl;
    document.getElementById('price').value = product.price;

    return product;
  } catch (err) {
    console.log('ERRORE', err);
  }
}

const submitProduct = async (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const descriptionInput = document.getElementById('description');
  const brandInput = document.getElementById('brand');
  const imageInput = document.getElementById('image');
  const priceInput = document.getElementById('price');

  const productFromForm = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: imageInput.value,
    price: parseFloat(priceInput.value)
  };

  console.log('PRODOTTO DA INVIARE ALLE API', productFromForm);

  const productId = new URLSearchParams(location.search).get('productId');
  let URL = 'https://striveschool-api.herokuapp.com/api/product';
  let methodToUse = 'POST';
  
  if (productId) {
    URL = `https://striveschool-api.herokuapp.com/api/product/${productId}`;
    methodToUse = 'PUT';
  }
  
  try {
    const response = await fetch(URL, {
      method: methodToUse,
      body: JSON.stringify(productFromForm),
      headers: {
        Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE", 
        'Content-type': 'application/json'
      },
    });
    if (response.ok) {
      alert(`Prodotto ${productId ? 'modificato' : 'creato'}!`);
    } else {
      throw new Error('Errore nel salvataggio della risorsa');
    }
  } catch (err) {
    console.log('ERRORE', err);
    alert(err);
  }
}

const handleInfoButtonClick = (productId) => {
  window.location.href = `info.html?productId=${productId}`;
};

const infoButtons = document.querySelectorAll('.info-btn');
infoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    handleInfoButtonClick(productId);
  });
});

const productId = new URLSearchParams(location.search).get('productId');

if (productId) {
  getProductData(productId)
    .then(() => {
      document.querySelector('.btn-primary').innerText = 'MODIFICA';
    })
    .catch(err => console.error(err));
}


document.getElementById('product-form').addEventListener('submit', submitProduct);
