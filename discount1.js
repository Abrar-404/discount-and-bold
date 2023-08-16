document.getElementById('btn-calculate').addEventListener('click', function () {
  const priceInput = document.getElementById('priceField');
  const priceAmount = priceInput.value;
  const priceTotal = parseFloat(priceAmount);

  const discountInput = document.getElementById('discountField');
  const discountAmount = discountInput.value;
  const discountTotalElement = parseFloat(discountAmount);

  const discountField = document.getElementById('discountedField');


  if (!isNaN(priceTotal) && !isNaN(discountTotalElement)) {
    const discountTotalAmount = (discountTotalElement / 100) * priceTotal;

    const discountTotal = priceTotal - discountTotalAmount;

    discountField.innerText = discountTotal.toFixed(2);    
  } else {
    discountField.innerText = 'Please Provide valid number'
  }
})