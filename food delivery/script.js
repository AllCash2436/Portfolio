//let cartCounter = 0;
const menuItems = document.querySelectorAll('.menu-item');

function showMenu(category) {
  menuItems.forEach(item => {
    item.style.display = 'none';
    if (item.classList.contains(category)) {
      item.style.display = 'flex';
    }
  });
}

function addToCart(button) {
  const cartCounter = parseInt(button.dataset.counter) || 0;
  const count = cartCounter + 1;
  button.dataset.counter = count;
  button.textContent = `Add to Cart (${count})`;
}
//function addToCart(button) {
//  cartCounter++;
//  button.textContent = `Add to Cart (${cartCounter})`;
//}

// Показываем только элементы меню "Burgers" при загрузке страницы
showMenu('burgers');
