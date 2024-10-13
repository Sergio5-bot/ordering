let menu = [
    { image: 'margherita.png', title: 'margherita', price: 15},
    { image: 'salad.png', title: 'Salad', price: 12},
    { image: 'pizza.png', title: 'pizza', price: 11},
    { image: 'supaghetti.png', title: 'supaghetti', price: 13},
    { image: 'cake.png', title: 'cake', price: 31},
    { image: 'burger.png', title: 'burger', price: 16},
];
let localCart = localStorage.getItem('cart');
let cart = !localCart ? [] : JSON.parse(localCart);

loadMenu();
cartNumber();

function loadMenu() {
    let menuItems = '';
    menu.forEach((m, index) => {
        menuItems += `<div class ="main">
            <div class="sec-menu">
                <img src="/image/${m.image}" alt="${m.title}">
                <p>${m.title}</p>
                <p>$${m.token}</p>
                <button class="add-btn" onclick="addToCart(${index})">Add to Cart</button>
            </div>
        </div>`
    });
    document.getElementById('display').innerHTML = menuItems;
}

function addToCart (menuIndex) {
    let menuItem = menu[menuIndex];
    let cartSearch = cart.find((cartItem) => cartItem.title == menuItem.title);
    if (cartSearch == undefined) {
        cart.push({
            title: menuItem.title,
            price: menuItem.price,
            quantity: 1,
            total: menuItem.price,
        });
        alert(`${menuItem.title} added to cart`);
        cartNumber();
    } else {
        cartSearch.quantity =+ 1;
        cartSearch.price = menuItem.price;
        cartSearch.total = cartSearch.quantity * menuItem.price;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

function cartNumber() {
    document.getElementById('cart-count').innerHTML = cart.length;
}