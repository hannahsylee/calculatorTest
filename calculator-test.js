
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({ amount: 330000, years: 30, rate: 3.010})).toEqual('1393.07');
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({ amount: 10043, years: 8, rate: 5.8})).toEqual('131.00');
});

/// etc
