console.log("main.js active");

  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

//Make the object empty to hold new values.  
var coinPurse = {};


function coinCounter (num) {

  //Convert total amount to a whole number to make math easy.
  num = num * 100;

  //Find the number of quarters and assign to object.
  coinPurse.quarters = parseInt(num / 25);
  //Find the remaining amount, assign to current amount.
  num = num % 25;
  console.log("quarters", coinPurse.quarters);

  coinPurse.dimes = parseInt(num / 10);
  num = num % 10;
  console.log("dimes", num);

  coinPurse.nickels = parseInt(num / 5);
  num = num % 5;
  console.log("nickels", num);

  coinPurse.pennies = num; 
  console.log("pennies", coinPurse.pennies);

  return coinPurse;
}

coins = coinCounter(2.23)
console.log("coins", coins);


