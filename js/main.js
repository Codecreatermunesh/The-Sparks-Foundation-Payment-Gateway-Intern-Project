function toggleMenu() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}
//Toggling is typically implemented using JavaScript to add or remove a CSS class from the menu element. 
//This class might control whether the menu is visible or hidden
