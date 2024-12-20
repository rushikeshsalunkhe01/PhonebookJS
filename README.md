﻿

# Phonebook App

A simple phonebook application built using JavaScript, HTML, and CSS. This app allows users to add, delete, and view contacts with their names and phone numbers. The project demonstrates key concepts like **objects**, **JSON**, **structuring**, and **destructuring** in JavaScript.

## Features
- Add contacts (Name & Phone Number).
- Delete contacts from the list.
- Display contacts dynamically.
- Export contacts as a JSON string.

## Technologies Used
- HTML
- CSS
- JavaScript

## Concepts Demonstrated

### 1. **Objects**
- **Contact Object**: Each contact in the phonebook is represented as an object with `name` and `phone` properties.
  
  ```javascript
  const contact = {
      name: 'Rushikesh salunkhe',
      phone: '1234567890'
  };
  ```

### 2. **JSON (JavaScript Object Notation)**
- JSON is used for converting the array of contact objects into a string format. This is useful for exporting or storing the contact list.

  ```javascript
  const contactsJSON = JSON.stringify(contacts);
  console.log(contactsJSON); 
  ```

### 3. **Structuring Objects**
- The contact objects are created using a clear structure. When a new contact is added, the `name` and `phone` properties are set directly.

  ```javascript
  const contact = {
      name: name,
      phone: phone
  };
  ```

### 4. **Destructuring**
- Destructuring is used to extract the `name` and `phone` properties from the contact object inside the loop, making the code cleaner and more readable.

  ```javascript
  contacts.forEach(({ name, phone }, index) => {
      
  });
  ```

### 5. **Dynamic Contact List**
- The contact list is dynamically updated by adding/removing list items in the HTML DOM. The list is stored as an array of objects, and each time the list is updated, the page is refreshed.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/rushikeshsalunkhe01/PhonebookJS
   ```

2. Open `index.html` in your browser.

3. To add a contact:
   - Enter the **Name** and **Phone Number** in the input fields.
   - Click the "Add Contact" button to add it to the contact list.

4. To delete a contact:
   - Click the "Delete" button next to the contact in the list.

5. To export the contacts as a JSON string:
   - Click the "Export Contacts" button to see the JSON string in the console.

## File Structure

```
/PhonebookApp
    /index.html       # Main HTML file
    /style.css        # Styles for the app
    /script.js        # JavaScript functionality
    /README.md        # Project documentation
```

## Example Contact List

```
RUSHI SALUNKHE - 1234567890
AJINKYA SALUNKHE - 0987654321
```

