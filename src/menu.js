function createMenuPage () {
    const content = document.querySelector('#content');
    const pageContent = document.createEleemnt('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElemnt('li')
    menuItem1.textContent ='Pizza Ranch';
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Pizza cheesy';
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Pizza Vegan';
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(menuList);
    content.appendChild(pageContent);

}

export default createMenuPage; 