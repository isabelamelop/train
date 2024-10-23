document.getElementById('buyerForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;

    const response = await fetch('/add-buyer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    });

    const message = await response.text();
    alert(message);
    document.getElementById('name').value = '';
    loadBuyers();
});

async function loadBuyers() {
    const response = await fetch('/buyers');
    const buyers = await response.json();
    const buyersList = document.getElementById('buyersList');
    buyersList.innerHTML = '<h2>Compradores:</h2>' + buyers.map(b => `<p>${b.name}</p>`).join('');
}

loadBuyers();