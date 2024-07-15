const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

// Dados de exemplo
const items = [
    `moletom 1of1 “OG 2.0” Black Hoodie`,
    `1of1 Moletom Preto “Zurple 2.0`,
    `1of1 "OG 2.0" Dad Hat`,
    `1of1 "Redrum" Dad Hat`,
    `1of1 "Redrum" Black Hoodie`,
]

searchBar.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    searchResults.innerHTML = '';

    const filteredItems = items.filter(item => item.toLowerCase().includes(query));

    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        searchResults.appendChild(li);
    });

    if (query === '') {
        searchResults.innerHTML = '';
    }
});