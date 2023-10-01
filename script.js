const inputCardholderName = document.getElementById("cardholder-name");
const cardCardholderName = document.getElementById("card-front-name");
const inputCardNumber = document.getElementById("card-number");
const cardFrontNumber = document.getElementById("card-front-number");
const inputDateMonth = document.getElementById("card-date-month");
const cardDateMonth = document.getElementById("month");
const inputDateYear = document.getElementById("card-date-year");
const cardDateYear = document.getElementById("year");
const inputCVC = document.getElementById("card-cvc");
const cardCVC = document.getElementById("card-back-cvc");

inputCardNumber.addEventListener("input", (e) => {
  let v = e.target.value.replaceAll(/[^0-9]/g, ""),
    r = new RegExp(`.{1,${e.target.dataset.grouplength}}`, "g"),
    s = e.target.selectionStart,
    d = e.target.selectionEnd,
    fixCarret = d < e.target.value.length ? true : false;
  e.target.value = v.match(r)
    ? v
        .match(r)
        .slice(0, e.target.dataset.maxlength / e.target.dataset.grouplength)
        .join(" ")
    : "";
  if (fixCarret) e.target.setSelectionRange(s, d);

  cardFrontNumber.innerText = e.target.value;
});

inputCardholderName.addEventListener("input", (e) => {
  cardCardholderName.innerText = e.target.value;
});

inputDateMonth.addEventListener("input", (e) => {
  maxLengthValidation(e);
  cardDateMonth.innerText = String(e.target.value);
});

inputDateYear.addEventListener("input", (e) => {
  maxLengthValidation(e);
  cardDateYear.innerText = e.target.value;
});

inputCVC.addEventListener("input", (e) => {
  maxLengthValidation(e);
  cardCVC.innerText = e.target.value;
});

function maxLengthValidation(e) {
  if (e.target.value.length > e.target.dataset.maxlength) {
    e.target.value = e.target.value.slice(0, e.target.dataset.maxlength);
  }
}
