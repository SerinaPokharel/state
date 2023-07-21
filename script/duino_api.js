fetch('https://server.duinocoin.com/users/aryan')
  .then(response => response.json())
  .then(data => {
    // Process the data and update the HTML
    displayData(data);
  })
 

function displayData(data) {
  const balanceElement = document.getElementById('balance');
  balanceElement.textContent = `${data.result.balance.balance}`;

  const miners = data.result.miners;
  const latestMiner = miners[miners.length - 1]; // Get the last miner in the array

  const hashrateElement = document.getElementById('hashrate');
  hashrateElement.textContent = `${latestMiner.hashrate}`;

  const transactions = data.result.transactions;
  const transactionsListElement = document.getElementById('transactions');
  transactions.forEach((transaction, index) => {
    const transactionItem = document.createElement('li');
    transactionItem.textContent = `Transaction ${index + 1}: ${transaction.sender} sent ${transaction.amount} to ${transaction.recipient}`;
    transactionsListElement.appendChild(transactionItem);
  });
}


 