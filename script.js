// document.getElementById('calculateButton').addEventListener('click', function(){
  
//   const originalPrice = document.getElementById('originalPrice');
//   const originalPriceString = originalPrice.value;
//   const originalTotalPrice = parseFloat(originalPriceString);
  
//   const discountPercentage = document.getElementById('discountPercentage');
//   const discountPercentageString = discountPercentage.value;
//   const discountTotalPercentage = parseFloat(discountPercentageString);
  
// if(!isNaN(originalTotalPrice) && !isNaN(discountTotalPercentage)){
  
//     const discountAmount = (discountTotalPercentage / 100) * originalTotalPrice;
  
//     const discountTotal = originalTotalPrice - discountAmount;
  
//     const discountedPriceOutput = document.getElementById('discountedPrice');

    
//     discountedPriceOutput.innerText = `Discounted Price: $${discountTotal.toFixed(2)};`
// } else {
//   discountedPriceOutput.innerText = "please provide valid number";
// }
  
// })


document.getElementById('calculateButton').addEventListener('click', function () {
  const originalPrice = document.getElementById('originalPrice');
  const originalPriceString = originalPrice.value;
  const originalTotalPrice = parseFloat(originalPriceString);

  const discountPercentage = document.getElementById('discountPercentage');
  const discountPercentageString = discountPercentage.value;
  const discountTotalPercentage = parseFloat(discountPercentageString);

  const discountedPriceOutput = document.getElementById('discountedPrice');


  if (!isNaN(originalTotalPrice) && !isNaN(discountTotalPercentage)) {
    const discountAmount = (discountTotalPercentage / 100) * originalTotalPrice;

    const discountTotal = originalTotalPrice - discountAmount;

    discountedPriceOutput.innerText = discountTotal.toFixed(2);    
  } else {
    discountedPriceOutput.innerText = 'Please Provide valid number'
  }
})