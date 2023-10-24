document.addEventListener("DOMContentLoaded", ()=>{
    let bookList = document.getElementById("book-list");
    fetch('https://wolnelektury.pl/api/books/')
       .then(res => res.json()
            .then(data=>{
                data.forEach(book => {
                    const markup= `<li>${book.name}</li>`;

                    document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
                    // let listItem = document.createElement('li');
                    // listItem.innetText = data.title;
                    // bookList.appendChild(listItem);
                    
                });
            })
       )
})