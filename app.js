// Book Constructor
// Book constructor is going to handle the actual book object
 function Book(title, author, isbn){
     this.title = title;
     this.author = author;
     this.isbn = isbn;

 }



// UI Constructor
// the ui constructor is going to be a set of prototype methods to do thing like add book to the list
function UI(){}

// Add Book TO List
UI.prototype.addBookTOList = function(book){
    // console.log(book);
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // console.log(row);

    // Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
}

// SHow alert
UI.prototype.showAlert = function(message, className){
    // Create div
    const div = document.createElement('div');
    // Add classses
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');

    // get form
    const form = document.querySelector('#book-form');

    // Insert alert
    container.insertBefore(div, form);
    // timeout after 3sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2000);
}


// clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    // console.log('test');

    // Get form value
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    // console.log(title, author, isbn);
    
    // Instaniate book
    const book = new Book(title, author, isbn);
    // console.log(book);

    // Instantiate ui
    const ui = new UI();
// validate
    if(title === '' || author === '' || isbn === ''){
        // alert('Failed');
// Error alert
        ui.showAlert('Please fill in all fields', 'error');
    }else{
        // console.log(ui);
        // Add book to list
        ui.addBookTOList(book);

        // Show success
        ui.showAlert('Book Added !', 'success');

        // Clear fields
        ui.clearFields();

    }

    

    e.preventDefault();
});