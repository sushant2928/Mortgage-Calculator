const calculateMonthlyPayment = (P, i, n) =>
  (P * ((i * (1 + i)) ^ n)) / (((1 + i) ^ n) - 1);

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const [P, i, n] = event.target;
  console.log(P.value, i.value, n.value);
  const monthlyPayment = calculateMonthlyPayment(P.value, i.value, n.value);
  alert(`Your monthly payment will be of Rs. ${Math.ceil(monthlyPayment)}`);
});
