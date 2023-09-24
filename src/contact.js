function createContactPage () {
    const content = document.querySelector('#page-content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Add form for contact
    const form = document.createElement('form');
    form.classList.add('contant-form');
    
    // Add input and input headline

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter heading';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter address';
    form.appendChild(addressInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.placeHolder = 'Enter Phone number';
    form.appendChild(phoneInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    form.appendChild(submitButton);

    pageContent.appendChild(form);
    content.appendChild(pageContent);

}

export default createContactPage;