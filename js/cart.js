let localCart = localStorage.getItem('cart');
let cart = !localCart ? [] : JSON.parse(localCart);

function sumCartTotal() {
    // let totalCost = cart.reduce((accum, value) => accum + value.total, 0);
    let totalCost = 0;
    cart.forEach(cartItem => {
        totalCost += cartItem.total
    });
    document.getElementById('total-amount').innerHTML = `Total: $${totalCost}`;
}

function listCartItems() {
    let cartLi = '';
    if (cart.length == 0) {
        cartLi = `<li>No items in the cart yet.</li>`;
    } else {
        cart.forEach(cartItem => {
            cartLi += `<li>Item: ${cartItem.title} | Price: $${cartItem.price} | Qty: ${cartItem.quantity} | Total: $${cartItem.total}</li>`
        })
    }

    document.getElementById('cart-list').innerHTML = cartLi;
}

listCartItems();
sumCartTotal();