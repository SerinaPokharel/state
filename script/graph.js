fetch('https://server.duinocoin.com/statistics')
  .then(response => response.json())
  .then(data => {
    // Process the data and update the HTML
    displayData(data);
    displayChart(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

function displayData(data) {
  // Process and display the necessary data here
  const ducoPriceElement = document.getElementById('duco-price');
  ducoPriceElement.textContent = `Duco Price: ${data['Duco price']}`;
}

function displayChart(data) {
  const labels = [
    'FluffySwap',
    'PancakeSwap',
    'SunSwap',
    'SushiSwap',
    'UbeSwap',
    'Duco Price BCH',
    'Duco Price NANO',
    'Duco Price TRX'
  ];

  const priceData = [
    data['Duco FluffySwap price'],
    data['Duco PancakeSwap price'],
    data['Duco SunSwap price'],
    data['Duco SushiSwap price'],
    data['Duco UbeSwap price'],
    data['Duco price BCH'],
    data['Duco price NANO'],
    data['Duco price TRX']
  ];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Duco Price',
        data: priceData,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const chartConfig = {
    type: 'line',
    data: chartData,
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            title: () => null, // Disable the title tooltip
            label: (context) => `Value: ${context.parsed.y}` // Customize the label tooltip
          }
        }
      },
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  const ctx = document.getElementById('price-chart').getContext('2d');
  new Chart(ctx, chartConfig);
}
