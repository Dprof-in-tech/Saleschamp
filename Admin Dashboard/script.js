// Add active class to current menu item
var currentUrl = window.location.href;
var menuItems = document.querySelectorAll('nav ul li a');

for (var i = 0; i < menuItems.length; i++) {
  if (menuItems[i].href === currentUrl) {
    menuItems[i].classList.add('active');
    break;
  }
}
