/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
 {
   name: "Cherry",
   price: 4.99,
   quantity: 0,
   productId: 1,
   image: "images/cherry.jpg",
  },
  {
    name: "Orange",
    price: 2.99,
    quantity: 0,
    productId: 2,
    image: "images/orange.jpg",
  },
  {
    name: "Strawberry",
    price: 5.99,
    quantity: 0,
    productId: 3,
    image: "images/strawberry.jpg",
  },
];

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
let totalPaid = 0;

function getProductById(productId) {
  return products.find((product) => product.productId === productId);
}

function addProductToCart(productId) {
  const product = getProductById(productId);
  

  if (product) {
    product.quantity++;

    if (!cart.includes(product)) {
      cart.push(product);
    }
  }
}

function increaseQuantity(productId) {
  const product = getProductById(productId);

  if(product) {
    product.quantity++;
  }
}

function decreaseQuantity(productId) {
  const product = getProductById(productId);

  if (product) {
    product.quantity--;

    if (product.quantity === 0) {
      const index = cart.indexOf(product);
      if (index > -1){
        cart.splice(index, 1);
      }
    }
  }
}

function removeProductFromCart(productId) {
  const product = getProductById(productId);

  if (product) {
    product.quantity = 0;
    const index = cart.indexOf(product);
    if (index > -1) {
      cart.splice(index, 1);
    }
  }
}

function cartTotal() {
  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }
  return total;
}

function emptyCart() {
  cart.length = 0;
}

function pay(amount) {
  totalPaid += amount;

  const cash_returned = totalPaid - cartTotal();

  if (cash_returned >= 0) {
    totalPaid = 0;
    emptyCart();
  }

  return cash_returned;
}

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
}
