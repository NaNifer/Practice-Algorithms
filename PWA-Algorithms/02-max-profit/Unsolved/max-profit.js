// Write a function that takes an array of integers representing the price of a stock on different days.
// Return the maximum profit that can be made from buying and selling a single stock.

// TODO: Complete the function below:

const maxProfit = function (prices) {
    let smallest = Infinity;
    let bestProfit = 0;
  
    for (let i = 0; i < prices.length; i++) {
      let price = prices[i];
      smallest = Math.min(smallest, price);
      bestProfit = Math.max(bestProfit, price - smallest);
    }
  
    return bestProfit;
  };