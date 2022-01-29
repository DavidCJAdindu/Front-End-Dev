// input for btc/usd bought
var btcBought = document.getElementById('bought');
Number(btcBought);

// input for btc/usd today
var btcNow = document.getElementById('now');
Number(btcNow);

// input for # of btc bought
var btcAmount = document.getElementById('numberofbtc');
Number(btcAmount);

// output in either red/green in result class
var button = document.getElementById('button');
button.onclick = quickMaths;

var result = document.getElementById('result');

function quickMaths() {

  var profit = (btcNow.value - btcBought.value) * btcAmount.value;
  Number(profit);

  if(profit > 0) {
    result.innerHTML = 'Great! You made a profit of $' + profit;
    result.style.color = 'green';
  } else {
    result.innerHTML = 'Oh no! Your making a loss of $' + profit;
    result.style.color = 'red';
  }

}