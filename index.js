let itemsEndpoint = "http://localhost:3000/items";

document.addEventListener("DOMContentLoaded", () => {
  getItems();
  document.querySelector("#buy-item").addEventListener("click", handleBuyItem);
  console.log(showMessage);{

  }
});

function getItems() {
  fetch(itemsEndpoint)
      .then(res => res.json())
      .then(items => {
          items.forEach(items => {
              renderItemList(items);
          });
          const firstItem = document.querySelector("#id1");
          firstItem.dispatchEvent(new Event("click"));
      });
}

function renderItemList(item) {
  const li = document.createElement("li");
  li.textContent = `${item.name}`;
  li.id = "id" + item.id;
  const ul = document.querySelector("#items");
  ul.appendChild(li);
  li.classList.add("cloth");
  li.classList.add("item");

  // Add delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
      removeItem(item.id);
  });
  li.appendChild(deleteButton);

  li.addEventListener("click", () => {
      handleItemClick(item);
  });
}


function handleItemClick(item) {
  const image = document.querySelector("img#image");
  image.src = item.image;
  image.alt = item.image;
  const info = document.querySelector("#showing");
  info.querySelector("#title").textContent = item.name;
  info.querySelector("#item-info").textContent = item.description;
  info.querySelector("#price").textContent = item.price;
  info.querySelector("#size").textContent = item.size;
  info.querySelector("#stock").textContent 
      item.stock - item.stock_sold + " stock left";
}


function handleBuyItem(Item) {
  const itemDiv = document.querySelector("#stock left");
  const item = itemDiv.textContent.split(" ")[0];
  if (item> 0) {
      itemDiv.textContent = items - 1 + " stock left";
  }
  
}


function removeItem(itemId) {
  const itemElement = document.querySelector(`#id${itemId}`);
  itemElement.remove();

  // Delete item on the server
  fetch(`${itemsEndpoint}/${itemId}`, {
      method: "DELETE",
  })
      .then(res => res.json())
      .then(data => {
          console.log(`Itemwith ID ${itemId} deleted on the server.`);
      })
      .catch(error => {
          console.error(`Error deleting film with ID ${itemId}: ${error.message}`);
      });
}












































































































































// const clothesData = [
//   { name: 'T-Shirt', price: $45, image: 'tshirt.jpg' },
//   { name: 'Jeans', price: $99, image: 'jeans.jpg' },
//   { name: 'hoodie', price: $119, image: 'hoodie.jpg' },
//   {name:'sweat shirt', price: $45, image: 'sweat shirt.jpg' },      
//   { name:'cargo pants', price: $50, image: 'cargo pants.jpg' },
//   {name:'shoes', price: $90, image: 'shoes.jpg'},
//   {name: 'rings', price: $10, image:'rings.jpg'},
//   { name: 'Watch', price: $65, image: 'watch.jpg' },
//   { name: 'bracelet', price: $75, image: 'chromehearts.jpg' },
// ];

// const clothesList = document.getElementById('clothesList');
// const  accessoriesList = document.getElementById('clothesList');
// const cartItems = document.getElementById('cartItems');
// const shoppingCart = document.getElementById('shoppingCart');
// const viewCartBtn = document.getElementById('viewCartBtn');
// const checkoutBtn = document.getElementById('checkoutBtn');
// const clothesTemplate = document.getElementById('clothesTemplate');

// // Render clothes items
// function renderClothes() {
//   clothesList.innerHTML = '';
//   clothesData.forEach(clothes => {
//     const clone = clothesTemplate.content.cloneNode(true);
//     clone.querySelector('.clothes-name').textContent = clothes.name;
//     clone.querySelector('.clothes-price').textContent = `$${clothes.price}`;
//     clone.querySelector('.clothes-image').src = clothes.image;
//     clone.querySelector('.add-to-cart-btn').addEventListener('click', () => addToCart(clothes));
//     clothesList.appendChild(clone);
//   });
// }


// // Add item to cart
// function addToCart(item) {
//   const li = document.createElement('li');
//   li.textContent = `${item.name} - $${item.price}`;
//   const removeBtn = document.createElement('button');
//   removeBtn.textContent = 'Remove';
//   removeBtn.classList.add('remove-btn');
//   removeBtn.addEventListener('click', () => removeItemFromCart(li));
//   li.appendChild(removeBtn);
//   cartItems.appendChild(li);
// }

// // Remove item from cart
// function removeItemFromCart(item) {
//   cartItems.removeChild(item);
// }


// // Checkout
// checkoutBtn.addEventListener('click', () => {
//   alert('Thank you for your purchase!');
//   cartItems.innerHTML = '';
// });

// // Initial render
// renderClothes();
// // Initial render
// renderAccessories();
