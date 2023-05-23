 // Fetch balance
 fetch('https://api.nanopool.org/v1/xmr/balance/4B73WQfSB9ZJRz6bcbRwmJdyMGsJMi1DR7yyH7N9qBKNQCvN42f9Wk8NyXPFDsfC8dMrhiHB4Byim72eVs8Qqys2CFx4M4S')
 .then(response => response.json())
 .then(data => {
   document.getElementById('balance').textContent = data.data;
 });

// Fetch hashrate
fetch('https://api.nanopool.org/v1/xmr/avghashratelimited/4B73WQfSB9ZJRz6bcbRwmJdyMGsJMi1DR7yyH7N9qBKNQCvN42f9Wk8NyXPFDsfC8dMrhiHB4Byim72eVs8Qqys2CFx4M4S/1')
 .then(response => response.json())
 .then(data => {
  const avgHashrate = data.data;
  const avgHashrateHs = avgHashrate + " H/s";
  document.getElementById('avg-hashrate').textContent = avgHashrateHs;
 });

// Fetch chart
fetch('https://api.nanopool.org/v1/xmr/hashratechart/4B73WQfSB9ZJRz6bcbRwmJdyMGsJMi1DR7yyH7N9qBKNQCvN42f9Wk8NyXPFDsfC8dMrhiHB4Byim72eVs8Qqys2CFx4M4S')
 .then(response => response.json())
 .then(data => {
   document.getElementById('chart-image').src = data.url;
 });

// current hashrate
fetch('https://api.nanopool.org/v1/xmr/hashrate/4B73WQfSB9ZJRz6bcbRwmJdyMGsJMi1DR7yyH7N9qBKNQCvN42f9Wk8NyXPFDsfC8dMrhiHB4Byim72eVs8Qqys2CFx4M4S')
  .then(response => response.json())
  .then(data => {
    const curHashrate = data.data;
      const curHashrateHs = curHashrate + " H/s";
      document.getElementById('current-hashrate').textContent = curHashrateHs;
  }
);

// balance
fetch('https://api.nanopool.org/v1/xmr/balance/4B73WQfSB9ZJRz6bcbRwmJdyMGsJMi1DR7yyH7N9qBKNQCvN42f9Wk8NyXPFDsfC8dMrhiHB4Byim72eVs8Qqys2CFx4M4S')
  .then(response => response.json())
  .then(data => {
    const balance = data.data;
      const balanceXmr = balance + " XMR";
      document.getElementById('balance').textContent = balanceXmr;
  }
);

//total amount
const xmrAmount = 37.975975607972;

   fetch('https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD')
      .then(response => response.json())
      .then(data => {
        const xmrPrice = data.USD;
        const totalAmount = xmrAmount * xmrPrice;

        document.getElementById('total-amount').textContent = '$' + totalAmount.toFixed(2) + " USD";
      });

    document.getElementById('xmr-amount').textContent = xmrAmount + " XMR"; 
    

 //unconfirmed balance
  fetch('https://api.nanopool.org/v1/xmr/payments/4B73WQfSB9ZJRz6bcbRwmJdyMGsJMi1DR7yyH7N9qBKNQCvN42f9Wk8NyXPFDsfC8dMrhiHB4Byim72eVs8Qqys2CFx4M4S/1')
    .then(response => response.json())
    .then(data => {
      const unconfirmedBalance = data.data[0].amount;
      const unconfirmedBalanceXmr = unconfirmedBalance + " XMR";

      document.getElementById('unconfirmed-balance').textContent = unconfirmedBalanceXmr;
    }
  );

  //xmr value
  fetch('https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD')
  .then(response => response.json())
  .then(data => {
    const xmrValue = data.USD;
    const conversion = `1 XMR = $${xmrValue}`;
    document.getElementById('xmr-value').textContent = conversion;
  });

  // share rate history
  fetch('https://api.nanopool.org/v1/xmr/shareratehistory/4B73WQfSB9ZJRz6bcbRwmJdyMGsJMi1DR7yyH7N9qBKNQCvN42f9Wk8NyXPFDsfC8dMrhiHB4Byim72eVs8Qqys2CFx4M4S/1')
  .then(response => response.json())
  .then(data => {
    const shareRate = data.data[0].shares;
    const shareRateHs = shareRate + " H/s";
    document.getElementById('share-rate').textContent = shareRateHs;
  });


  //chart

  