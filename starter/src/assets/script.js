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

/* Create a function named addProductToCart that takes in the product productId as an argument*/
function addProductToCart(productId) {
 /*addProductToCart should get the correct product based on the productId*/
  const product = getProductById(productId);
  

  if (product) {
   /* addProductToCart should then increase the product's quantity*/
    product.quantity++;

    if (!cart.includes(product)) {
     /*if the product is not already in the cart, add it to the cart*/
      cart.push(product);
    }
  }
}

/*Create a function named increaseQuantity that takes in the productId as an argument*/
function increaseQuantity(productId) {
 /*increaseQuantity should get the correct product based on the productId*/
  const product = getProductById(productId);

  if(product) {
   /*increaseQuantity should then increase the product's quantity*/
    product.quantity++;
  }
}

/*Create a function named decreaseQuantity that takes in the productId as an argument*/
function decreaseQuantity(productId) {
 /*decreaseQuantity should get the correct product based on the productId*/
  const product = getProductById(productId);

  if (product) {
   /*decreaseQuantity should decrease the quantity of the product*/
    product.quantity--;
   /*if the function decreases the quantity to 0, the product is removed from the cart*/

    if (product.quantity === 0) {
      const index = cart.indexOf(product);
      if (index > -1){
        cart.splice(index, 1);
      }
    }
  }
}

/*Create a function named removeProductFromCart that takes in the productId as an argument*/
function removeProductFromCart(productId) {
 /*removeProductFromCart should get the correct product based on the productId*/
  const product = getProductById(productId);

  if (product) {
   /*removeProductFromCart should update the product quantity to 0*/
    product.quantity = 0;
   /*removeProductFromCart should remove the product from the cart*/
    const index = cart.indexOf(product);
    if (index > -1) {
      cart.splice(index, 1);
    }
  }
}

/*Create a function named cartTotal that has no parameters*/
function cartTotal() {
 /* cartTotal should iterate through the cart to get the total cost of all products*/
  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }

 /*cartTotal should return the total cost of the products in the cart*/
  return total;
}

/*Create a function called emptyCart that empties the products from the cart*/
function emptyCart() {
  cart.length = 0;
}

/* Create a function named pay that takes in an amount as an argument*/
function pay(amount) {
  totalPaid += amount;

  const remainingBalance = totalPaid - cartTotal();

  if (remainingBalance >= 0) {
    totalPaid = 0;
    emptyCart();
  }

  return remainingBalance;
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
