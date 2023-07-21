fetch('https://magi.duinocoin.com/users/aryan')
    .then(response => response.json())
    .then(data => {
        const balance = data.result.balance.balance;
        const transactions = data.result.transactions.transactions;
        const ducoexchange = data.result.ducoexchange ? data.result.ducoexchange.ducoexchange : 'N/A';

        const balanceDisplayElement = document.getElementById('balance');
        balanceDisplayElement.textContent = balance;

        const transactionsDisplayElement = document.getElementById('transactions');
        transactionsDisplayElement.textContent = transactions;

        const ducoexchangeDisplayElement = document.getElementById('ducoexchange');
        ducoexchangeDisplayElement.textContent = ducoexchange;
    })
    .catch(error => console.error('Error:', error));
