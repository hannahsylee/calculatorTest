window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment

function setupIntialValues() {
  // Put some default values in the inputs
  const formValues = { amount: 100000, years: 15, rate: 3.67 };

  // Get the inputs from the DOM.
  const loanAmount = document.querySelector('#loan-amount');
  loanAmount.value = formValues.amount;
  const loanYears = document.querySelector('#loan-years');
  loanYears.value = formValues.years;
  const loanRate = document.querySelector('#loan-rate');
  loanRate.value = formValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // P = amount of principle
  // i = periodic interest rate (in our case yearly rate / 12)
  // n = total number of payments (years x 12)
  let P = values.amount;
  let n = Math.floor(values.years*12);
  let i = (values.rate/100)/12;

  return ((P * i)/(1-Math.pow((1+i), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById('monthly-payment');
  monthlyUI.innerText = '$' + monthly;
}



