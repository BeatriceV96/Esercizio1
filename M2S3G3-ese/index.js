document.addEventListener('DOMContentLoaded', function() {
    // Funzione per salvare il valore nel localStorage come JSON
    function salvaNome(nome) {
      localStorage.setItem('nome', JSON.stringify(nome));
      document.getElementById('valoreSalvato').textContent = 'Valore precedentemente salvato: ' + nome;
    }

    // Recupera il valore precedentemente salvato dal localStorage
    var valorePrecedente = localStorage.getItem('nome');

    // Mostra il valore precedentemente salvato sopra l'input field
    if (valorePrecedente) {
      var nome = JSON.parse(valorePrecedente);
      document.getElementById('inputNome').value = nome;
      document.getElementById('valoreSalvato').textContent = 'Valore precedentemente salvato: ' + nome;
    }

    // Aggiungi evento di click per salvare il nome nel localStorage
    document.getElementById('salvaNome').addEventListener('click', function() {
      var nome = document.getElementById('inputNome').value;
      if (nome.trim() !== '') {
        salvaNome(nome);
        alert('Nome salvato con successo!');
      } else {
        alert('Inserisci un nome valido!');
      }
    });

    // Aggiungi evento di click per rimuovere il nome dal localStorage
    document.getElementById('rimuoviNome').addEventListener('click', function() {
      localStorage.removeItem('nome');
      document.getElementById('valoreSalvato').textContent = '';
      document.getElementById('inputNome').value = ''; // Rimuovi anche il testo dall'input field
      alert('Nome rimosso dal localStorage!');
    });
  });