import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

 

 function createTabs (){
     const content = document.querySelector('#content')

     //Create three divs for the tabs
     const div1 = document.createElement('div');
     const div2 = document.createElement('div');
     const div3  = document.createElement('div');

     // Set IDs for the divs for styling purposes
     div1.setAttribute('id','home-btn');
     div2.setAttribute('id','menu-btn');
     div3.setAttribute('id','contact-btn');

     // Set classes for the divs
     div1.classList.add('tab');
     div2.classList.add('tab');
     div3.classList.add('tab');
    
     // Set texts for the divs
     div1.textContent = 'Home';
     div2.textContent = 'Menu';
     div3.textContent = 'Contact';
     
     //Append the divs to the content div
     content.appendChild(div1);
     content.appendChild(div2);
     content.appendChild(div3);


     div1.addEventListener('click', () =>{
        createRestaurantHomePage();
     });

     div2.addEventListener('click', () =>{
        createMenuPage();
     });

     div3.addEventListener('click', () =>{
        createContactPage();
     });
     
     

 }

 export default createTabs;