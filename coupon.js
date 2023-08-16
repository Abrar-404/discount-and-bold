document.getElementById('applyCoupon').addEventListener('click', function () {
  
  const couponField = document.getElementById('couponField');
  const couponFieldString = couponField.value;
  // const coupon = parseFloat(couponFieldString);

  const priceField = document.getElementById('priceField');
  const priceFieldString = priceField.value;
  // const priceTotal = parseFloat(priceFieldString);

  const discountedTotal = document.getElementById('discountedPrice');

  if (couponFieldString === 'discount') {
    const discountedPrice = priceFieldString * 0.97;
    
    discountedTotal.innerText = discountedPrice.toFixed(2);
  } else {
    discountedTotal.innerText = "Invalid Code";
  }
})