function addToCart(productId) {
    
    const quantityInput = document.getElementById('id_quantity');
    const atcButton = document.querySelector('.atc-btn');

    
    const nameElement = document.querySelector('.item-header');
    const imgElement = document.querySelector('.item-img');

    
    const quantity = parseInt(quantityInput.value);

    const priceElement = document.querySelector('.price');
    const floatMatch = priceElement.textContent.match(/\d+\.\d+/);
    price = 0.0;
    if (floatMatch) {
        price = parseFloat(floatMatch[0]);
        console.log(price)
    }

    const cartData = JSON.parse(localStorage.getItem('cart')) || {};

    
    const productInfo = {
        quantity,
        name: nameElement.textContent,
        img: imgElement.src,
        price: price
    };

    
    cartData[productId] = productInfo;

    
    localStorage.setItem('cart', JSON.stringify(cartData));

   
    alert(`Added ${quantity} of ${productInfo.name} to the cart.`);
}

    // const jsonPath = 'cart.json';

    // fetch(jsonPath)
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data[id]) {
    //             data[id].quantity = quantity;
    //         }
    //         else {
    //             console.log('Not valid product: ')
    //         }

    //     return fetch(jsonPath, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),

    //     });
    // })


