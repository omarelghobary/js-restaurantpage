import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

 

 function createTabs (){
     const content = document.querySelector('#content');
     const tabsContainer = document.createElement('div');

     //Create three divs for the tabs
     const home = document.createElement('div');
     const menu = document.createElement('div');
     const contact  = document.createElement('div');

     // Set IDs for the divs 
     tabsContainer.setAttribute('id','tabs-container');
     home.setAttribute('id','home-btn');
     menu.setAttribute('id','menu-btn');
     contact.setAttribute('id','contact-btn');

     // Set classes for the divs
     home.classList.add('tab');
     menu.classList.add('tab');
     contact.classList.add('tab');
    
     // Set texts for the divs
     home.textContent = 'Home';
     menu.textContent = 'Menu';
     contact.textContent = 'Contact';
     
     //Append the divs to the content div
     tabsContainer.appendChild(home);
     tabsContainer.appendChild(menu);
     tabsContainer.appendChild(contact);
     content.appendChild(tabsContainer);


     home.addEventListener('click', () =>{
        clearContent();
        createRestaurantHomePage();
     });

     menu.addEventListener('click', () =>{
        clearContent();
        createMenuPage();
     });

     contact.addEventListener('click', () =>{
        clearContent()
        createContactPage();
     });
     

 }

 function clearContent() {
      const content = document.querySelector('#content');
      const pageContent = document.querySelector('.page-content');
      if(pageContent) {
         content.removeChild(pageContent);
      }

 }

 export default createTabs;