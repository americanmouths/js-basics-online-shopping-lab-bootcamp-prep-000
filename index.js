var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1;
 var item_object = {};
 item_object[item] = price
 cart.push(item_object)
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
   if (cart.length === 0) {
     console.log("Your shopping cart is empty.");
   }
   let statementArray = []
   let i = 0, l = cart.length
   while(i<l) {
     var item = Object.keys(cart[i])[0]
     var price = cart[i][item]
     statementArray.push(item +" at $" + price);
     i++
   }
   console.log(`In your cart, you have ${statementArray.join(', ')}.`)
 }

function total() {
  var sum = 0;
  var item = [];
  for (var key in cart) {
  sum += parseInt(cart[item]);
  }
  return sum;
}

function removeFromCart(item) {
  var itemInCart = false
    for(var i = 0; i < cart.length; i++){
     if (cart[i].hasOwnProperty(item)) {
        itemInCart = true;
     cart.splice(i, 1);
}
   }
   if (!itemInCart) {
      console.log("That item is not in your cart.");
   }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
