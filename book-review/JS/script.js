// document.addEventListener('DOMContentLoaded', () => {
//     const bookReview = document.getElementById('book-review');
//     const booklist = document.getElementById('book-list');
  
//     fetch('https://www.googleapis.com/books/v1/volumes?q=friction')
//       .then((res) => res.json())
//       .then((data) => {
//         data.items.forEach((book) => {
//           const bookInfo = book.volumeInfo;
//           const bookItem = document.createElement('div');
//           bookItem.classList.add('book');
//           bookItem.innerHTML = `
//             <h2>${bookInfo.title}</h2>
//             <img src="${bookInfo.imageLinks.thumbnail}" alt="book Cover">
//             <p><strong>AUTHOR:</strong>${bookInfo.authors}</p>
//             <p><strong>publisher:</strong>${bookInfo.publisher}</p>
//             <p><strong>publishedDate</strong>${bookInfo.publishedDate}</p>
            
//             <div class="comments">
//               <!-- Existing comments will be displayed here -->
//             </div>
//             <form class="commentForm">
//               <textarea class="commentText" placeholder="Write your comment..."></textarea>
//               <button type="submit">Post Comment</button>
//             </form>
//           `;
  
//           const bookListItem = document.createElement('li');
//           bookListItem.classList.add('book');
//           bookListItem.innerHTML = `
//             <h5>${bookInfo.title}</h5>
//           `;
  
//           bookReview.appendChild(bookItem);
//           booklist.appendChild(bookListItem);
//         });
//         const button = document.createElement('button')
//                 button.textContent = 'Description'
//                 button.addEventListener('click', () => {
//                     if(bookInfo.description){

                    
//                     const descriptionDiv = document.createElement('div')
//                     descriptionDiv.textContent = bookInfo.description
//                     // newDiv.textContent = bookInfo.description                    
                    
//                     bookItem.appendChild(descriptionDiv)
//                     }else{
//                         alert('No description available for this book.')
//                     }

                    
                    
                    
//                 })
//                 bookItem.appendChild(button);
//                    ;
                

//             });
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         }));
    
  
//         // Event listener for the comment form
//         const commentForms = document.querySelectorAll('.commentForm');
//         commentForms.forEach((form) => {
//           form.addEventListener('submit', function (event) {
//             event.preventDefault();
  
//             const commentText = form.querySelector('.commentText').value;
//             if (commentText.trim() !== '') {
//               const commentDiv = document.createElement('div');
//               commentDiv.className = 'comment';
//               commentDiv.textContent = commentText;
  
//               form.parentElement.querySelector('.comments').appendChild(commentDiv);
  
//               form.querySelector('.commentText').value = '';
//             }
//           });
//         });
  
//         // Function to search for books
//         function searchBooks() {
//           let input = document.getElementById('searchbar').value.toLowerCase();
//           let bookItems = document.querySelectorAll('.book');
  
//           bookItems.forEach((item) => {
//             if (!item.innerHTML.toLowerCase().includes(input)) {
//               item.style.display = 'none';
//             } else {
//               item.style.display = 'block';
//             }
//           });
//         }
  
//         // Event listener for the search bar
//         const searchBar = document.getElementById('searchbar');
//         searchBar.addEventListener('input', searchBooks);
//       });
//   });
document.addEventListener("DOMContentLoaded", ()=>{
    const bookReview = document.getElementById("book-review");
        const booklist = document.getElementById('book-list');

    
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
                    <div class="comments">
              <!-- Existing comments will be displayed here -->
            </div>
            <form class="commentForm">
              <textarea class="commentText" placeholder="Write your comment..."></textarea>
              <button type="submit">Post Comment</button>
            </form>
                `;
            
                const bookListItem = document.createElement('li');
          bookListItem.classList.add('book');
          bookListItem.innerHTML = `
            <h5>${bookInfo.title}</h5>
          `;
                

                
                bookReview.appendChild(bookItem);
                booklist.appendChild(bookListItem);
                             



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
                   ;
                

            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        }));

//Event listener for the comment form
        const commentForms = document.querySelectorAll('.commentForm');
        commentForms.forEach((form) => {
          form.addEventListener('submit', function (event) {
            event.preventDefault();
  
            const commentText = form.querySelector('.commentText').value;
            if (commentText.trim() !== '') {
              const commentDiv = document.createElement('div');
              commentDiv.className = 'comment';
              commentDiv.textContent = commentText;
  
              form.parentElement.querySelector('.comments').appendChild(commentDiv);
  
              form.querySelector('.commentText').value = '';
            }
          });
        });

}



);
