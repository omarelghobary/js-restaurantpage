function createContactPage () {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    //Add a message for the user 
    const message = document.createElement('h2');
    message.textContent = 'Drop your contact down here and we will send you a Pizza'
    pageContent.appendChild(message);


    //Add form for contact
    const form = document.createElement('form');
    form.classList.add('contant-form');
    
    // Add input and input headline

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter heading';
    form.appendChild(headingInput);

    //Add address input
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter address';
    form.appendChild(addressInput);

    //Add phone input
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = 'Enter Phone number';
    form.appendChild(phoneInput);

    //Add submit input
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    form.appendChild(submitButton);

    //Add form to the page content then add them to the content
    pageContent.appendChild(form);
    content.appendChild(pageContent);

}

export default createContactPage;