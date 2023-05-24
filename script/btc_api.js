const btcAmount = 0.18765321;

   fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
      .then(response => response.json())
      .then(data => {
        const btcPrice = data.USD;
        const totalAmount = btcAmount * btcPrice;

        document.getElementById('total-amount').textContent = '$' + totalAmount.toFixed(2) + " USD";
      });

    document.getElementById('btc-amount').textContent = btcAmount + " BTC"; 

 // unpaid btc
const unpaidBtc = 0.00003155;
document.getElementById('unpaid-btc').textContent = unpaidBtc + " BTC";


// Fetch BTC value
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    const btcValue = data.bitcoin.usd;
    const conversion = `1 BTC = $${btcValue}`;
    document.getElementById('btcc-value').textContent = conversion;
  })
  .catch(error => {
    console.error('Error fetching BTC value:', error);
  });

  //current profit
  const currentProfit = 0.00000000;
  document.getElementById('current-profit').textContent = currentProfit + " BTC";

  //wallet address
  const walletAddress = '3GXawNWGMkcjwu6sngxRWj5vMSqMvoKPqS';
const maskedAddress = `${walletAddress.slice(0, 3)}*************${walletAddress.slice(-4)}`;
document.getElementById('wallet-address').textContent = `Wallet Address: ${maskedAddress}`;
