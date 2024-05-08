document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente caricato');

    const bookListContainer = document.getElementById('bookList');
    console.log('Ricerca del container dei libri completata');

    fetch('https://striveschool-api.herokuapp.com/books')
        .then(response => {
            console.log('Richiesta GET completata');
            if (!response.ok) {
                throw new Error('Errore nella richiesta!');
            }
            return response.json();
        })
        .then(books => {
            console.log('Risposta JSON ottenuta:', books);
            books.forEach(book => {
                const card = document.createElement('div');
                card.classList.add('card');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const title = document.createElement('h5');
                title.classList.add('card-title');
                title.textContent = book.title;

                const author = document.createElement('p');
                author.classList.add('card-text');
                author.textContent = `Author: ${book.author}`;

                const price = document.createElement('p');
                price.classList.add('card-text');
                price.textContent = `Price: $${book.price}`;

                cardBody.appendChild(title);
                cardBody.appendChild(author);
                cardBody.appendChild(price);

                card.appendChild(cardBody);

                bookListContainer.appendChild(card);
            });
            console.log('Rendering dei libri completato');
        })
        .catch(error => {
            console.error('Errore durante il recupero dei libri:', error.message);
        });
});
