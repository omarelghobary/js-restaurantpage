import './style.css';
import Image from './mainPizza.jpg';

export default  function createRestaurantHomePage (){
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append image element
    const image = document.createElement('img');
    image.src = Image;
    image.height = '600';
    pageContent.appendChild(image);
 
    //Create and append the headline element
    const headline = document.createElement('h1'); 
    headline.textContent = 'Welcome to Pizza Elghobary';
    pageContent.appendChild(headline); 

    // Create and append description element p
    const paragraph = document.createElement('p');
    paragraph.textContent = 'We are here to give you the best pizza experience in the world with our '
    +'unique techniques in the crust making with our special sauces, specially the ranch sauce yumm!!';
    pageContent.appendChild(paragraph);

    content.appendChild(pageContent);
}
