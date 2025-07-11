// Example: Fetch products from AliExpress API
const productList = document.getElementById('product-list');

async function fetchProducts() {
  try {
    const response = await fetch('https://api.aliexpress.com/rest/eco/api/products/search ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        params: {
          keyword: 'electronics', // Replace with your search term
          pageSize: 10,
        },
      }),
    });

    const data = await response.json();
    console.log(data);

    // Display products
    data.products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      const img = document.createElement('img');
      img.src = product.image.url;
      img.alt = product.title;

      const title = document.createElement('h3');
      title.textContent = product.title;

      const price = document.createElement('p');
      price.textContent = `Price: $${product.price}`;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);

      productList.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchProducts();
