document.addEventListener("DOMContentLoaded", ()=>{
    const bookList = document.getElementById("book-list");

    fetch('https://www.googleapis.com/books/v1/volumes?q=javascript')
       .then(res => res.json()
            .then(data=>{
                data.items.forEach(book => {
                    const bookInfo = book.volumeInfo;
                const bookItem = document.createElement('div');
                bookItem.classList.add('book');
                bookItem.innerHTML = `
                    <h2>${bookInfo.title}</h2>
                    <p><strong>Authors:</strong> ${bookInfo.authors}</p>
                    <p><strong>Published Date:</strong> ${bookInfo.publishedDate}</p>
                    <img src="${bookInfo.imageLinks.thumbnail}" alt="Book Cover">
                    
                `;
                
                bookList.appendChild(bookItem);

                const button = document.createElement('button')
                button.textContent = 'Description'
                button.addEventListener('click', () => {
                    if(bookInfo.description){

                    
                    const descriptionDiv = document.createElement('div')
                    descriptionDiv.textContent = bookInfo.description
                    // newDiv.textContent = bookInfo.description                    
                    
                    bookItem.appendChild(descriptionDiv)
                    }else{
                        alert('No description available for this book.')
                    }

                    
                    
                    
                })
                bookItem.appendChild(button);
                    bookList.appendChild(bookItem);
                

            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        }));
});
//const button = document.createElement('button');
// const button = document.createElement('button');
//                 button.textContent = 'Description';
//                 button.addEventListener('click', () => {
//                     if (bookInfo.description) {
//                         const descriptionDiv = document.createElement('div');
//                         descriptionDiv.textContent = bookInfo.description;
//                         bookItem.appendChild(descriptionDiv);
//                     } else {
//                         alert('No description available for this book.');
//                     }
//                 });