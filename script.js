
let contacts = [];


function addContact() {
    // Fetching input values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    
    if (!name || !phone) {
        alert('Both Name and Phone are required!');
        return;
    }

    
    const contact = {
        name: name,
        phone: phone
    };

    
    contacts.push(contact);

    updateContactList();


    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}

function updateContactList() {
    const list = document.getElementById('contact-list');
    list.innerHTML = ''; 


    contacts.forEach((contact, index) => {
        
        const { name, phone } = contact;

        const listItem = document.createElement('li');
        listItem.textContent = `${name} - ${phone}`;

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deleteContact(index);

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    });
}


function deleteContact(index) {

    contacts.splice(index, 1);

    
    updateContactList();
}


function exportContacts() {
    const contactsJSON = JSON.stringify(contacts); 
    console.log('Exported Contacts:', contactsJSON);
    alert('Contacts exported! Check console.');
}
