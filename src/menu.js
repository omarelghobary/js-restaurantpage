import Ranch from './ranch-pizza.jpg'
import Cheese from './cheese-pizza.jpg'
import Vegan from './vegan-pizza.jpg'

function createMenuPage () {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create a heading
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    pageContent.appendChild(heading);

    //Make an unordered list for the menu
    const menuList = document.createElement('ul');
    
    //first item with picture
    const menuItem1 = document.createElement('li')
    menuItem1.textContent ='Pizza Ranch';
    const ranchPizza = document.createElement('img');
    ranchPizza.src = Ranch;
    ranchPizza.height = '250'
    menuList.appendChild(ranchPizza)
    menuList.appendChild(menuItem1);

    //second item with picture 
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Pizza Cheesy';
    const cheesePizza = document.createElement('img');
    cheesePizza.src = Cheese;
    cheesePizza.height = '250'
    menuList.appendChild(cheesePizza)
    menuList.appendChild(menuItem2);


    // third item with picture
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Pizza Vegan';
    const VeganPizza = document.createElement('img');
    VeganPizza.src = Vegan;
    VeganPizza.height = '250';
    menuList.appendChild(VeganPizza);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(menuList);
    content.appendChild(pageContent);

}

export default createMenuPage; 