// Simple Interest Calculator

document.getElementById("calculate").addEventListener("click", function () {
  const P = parseFloat(document.getElementById("principal").value);
  const Rpercent = parseFloat(document.getElementById("rate").value);
  const T = parseFloat(document.getElementById("time").value);

  if (isNaN(P) || isNaN(Rpercent) || isNaN(T)) {
    document.getElementById("results").innerHTML = "<strong>Please enter all values correctly.</strong>";
    return;
  }

  const R = Rpercent / 100;
  const total = P * (1 + R * T);
  const interest = total - P;

  document.getElementById("results").innerHTML = `
    <h3>Your Results</h3>
    <p>With a beginning principal of $${P} and with a growth rate of ${Rpercent}% for ${T} years,
    your total interest will be $${interest.toFixed(0)} with a grand total of $${total.toFixed(0)}.</p>
  `;
});
