 // Fetch balance
 fetch('https://api.nanopool.org/v1/etc/balance/0x4f1578af53c5c17ec6e670f2f8021e4a97e9cbbe')
 .then(response => response.json())
 .then(data => {
   document.getElementById('balance').textContent = data.data;
 });

// Fetch hashrate
fetch('https://api.nanopool.org/v1/etc/avghashratelimited/0x4f1578af53c5c17ec6e670f2f8021e4a97e9cbbe/1')
 .then(response => response.json())
 .then(data => {
  const avgHashrate = data.data;
  const avgHashrateHs = avgHashrate + " H/s";
  document.getElementById('avg-hashrate').textContent = avgHashrateHs;
 });
 

// current hashrate
fetch('https://api.nanopool.org/v1/etc/hashrate/0x4f1578af53c5c17ec6e670f2f8021e4a97e9cbbe')
  .then(response => response.json())
  .then(data => {
    const curHashrate = data.data;
      const curHashrateHs = curHashrate + " H/s";
      document.getElementById('current-hashrate').textContent = curHashrateHs;
  }
);

// balance
fetch('https://api.nanopool.org/v1/etc/balance/0x4f1578af53c5c17ec6e670f2f8021e4a97e9cbbe')
  .then(response => response.json())
  .then(data => {
    const balance = data.data;
      const balanceETC = balance + " ETC";
      document.getElementById('balance').textContent = balanceETC;
  }
);
 
fetch('https://api.nanopool.org/v1/etc/balance/0x4f1578af53c5c17ec6e670f2f8021e4a97e9cbbe')
.then(response => response.json())
.then(data => {
  const totalAmount = data.data.balance;
  const totalAmountFormatted = "$" + totalAmount.toFixed(2) + " USD";
  document.getElementById('total-amount').textContent = totalAmountFormatted;
});

 //unconfirmed balance
  fetch('https://api.nanopool.org/v1/etc/payments/0x4f1578af53c5c17ec6e670f2f8021e4a97e9cbbe/1')
    .then(response => response.json())
    .then(data => {
      const unconfirmedBalance = data.data[0].amount;
      const unconfirmedBalanceXmr = unconfirmedBalance + " ETC";

      document.getElementById('unconfirmed-balance').textContent = unconfirmedBalanceXmr;
    }
  );

  //etc value
  fetch('https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD')
  .then(response => response.json())
  .then(data => {
    const etcValue = data.USD;
    const conversion = `1 ETC = $${etcValue}`;
    document.getElementById('etc-value').textContent = conversion;
  });

  // share rate history
  fetch('https://api.nanopool.org/v1/etc/shareratehistory/4B73WQfSB9ZJRz6bcbRwmJdyMGsJMi1DR7yyH7N9qBKNQCvN42f9Wk8NyXPFDsfC8dMrhiHB4Byim72eVs8Qqys2CFx4M4S/1')
  .then(response => response.json())
  .then(data => {
    const shareRate = data.data[0].shares;
    const shareRateHs = shareRate + " H/s";
    document.getElementById('share-rate').textContent = shareRateHs;
  });


  //chart

  