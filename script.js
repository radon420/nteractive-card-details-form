/* 
  ===========================
      Variable Decleration
           Section
  =========================== 
  */

const userBlankDisplay = document.querySelector(".user");
const cardBlankDisplay = document.querySelector(".number");
const expMonthBlankDisplay = document.querySelector(".expirymonth");
const expYearBlankDisplay = document.querySelector(".expiryyear");
const cvcBlankDisplay = document.querySelector(".cvcnumber");
let displayArray = [
  userBlankDisplay,
  cardBlankDisplay,
  expMonthBlankDisplay,
  expYearBlankDisplay,
  cvcBlankDisplay,
];
const patternArray = [
  /^([a-zA-Z]{3,})\s([a-zA-Z]{1,})$/g,
  /^(\s*((\d\s*){16})\s*)$/g,
  /^(![0]{2})$|^([0-1]{1})([0-9])$/g,
  /^[0-9]{2}$/g,
  /^[0-9]{3}$/g,
];

/* 
  ===========================
      Blank Form and Format
        Check Section
  =========================== 
  */

function checkIfBlank() {
  let userName = document.getElementById("userName").value;
  let cardNumber = document.getElementById("cardNumber").value;
  let expMonth = document.getElementById("expmonth").value;
  let expYear = document.getElementById("expyear").value;
  let cvcNumber = document.getElementById("cvc").value;
  let fieldArray = [userName, cardNumber, expMonth, expYear, cvcNumber];
  const elementValue = (value) => value.length > 0;
  let arrayInputValues = [];

  for (let i = 0; i < fieldArray.length; i++) {
    arrayInputValues = arrayInputValues.concat(
      patternArray[i].test(fieldArray[i])
    );
  }

  const validFormatCheck = (value) => value == true;

  if (
    fieldArray.every(elementValue) &&
    arrayInputValues.every(validFormatCheck)
  ) {
    ifNoBlanksfound();
  } else {
    fieldArray.forEach((element, index) => {
      if (element.length == 0) {
        displayArray[index].textContent = "Cannot be blank";
        index += 1;
      }
    });
  }
}

function ifNoBlanksfound() {
  let thankYouBox = document.querySelector(".hiddenthankyou");
  let userInputBox = document.querySelector("#userinputbox");

  userInputBox.style.display = "none";
  thankYouBox.style.display = "grid";
}

function confirm() {
  checkIfBlank();
}

/* 
  ===========================
      New Form Section
  =========================== 
  */

function continuetoaddmore() {
  let thankYouBox = document.querySelector(".hiddenthankyou");
  let userInputBox = document.querySelector("#userinputbox");
  document.getElementById("userName").value = "";
  document.getElementById("cardNumber").value = "";
  document.getElementById("expmonth").value = "";
  document.getElementById("expyear").value = "";
  document.getElementById("cvc").value = "";
  document.querySelector(".user").textContent = "";
  document.querySelector(".number").textContent = "";
  document.querySelector(".expirymonth").textContent = "";
  document.querySelector(".expiryyear").textContent = "";
  document.querySelector(".cvcnumber").textContent = "";

  userInputBox.style.display = "grid";
  thankYouBox.style.display = "none";
}

/* 
  ===========================
      Display Values As 
      User Types Section
  =========================== 
  */

function displayCardHolderName() {
  let userName = document.getElementById("userName").value;
  if (userName.length == 0) {
    return (document.getElementById("cardholdernameoncard").innerHTML =
      "Jane Appleseed");
  }
  document.querySelector(".user").textContent = "";
  return (document.getElementById("cardholdernameoncard").innerHTML = userName);
}

function displayCardNumber() {
  let cardNumber = document.getElementById("cardNumber").value;

  if (cardNumber.length == 0) {
    return (document.getElementById("cardnumberoncard").innerHTML =
      "1234 5678 9123 0000");
  }
  document.querySelector(".number").textContent = "";
  return (document.getElementById("cardnumberoncard").innerHTML = cardNumber
    .toString()
    .replaceAll([" "], "")
    .replace(/\d{4}/g, "$& "));
}
function displayExpiryMonth() {
  let expMonth = document.getElementById("expmonth").value;
  monthToString = expMonth.toString();
  if (expMonth.length == 0) {
    return (document.getElementById("expirydateoncard").innerHTML = "MM/YY");
  } else document.querySelector(".expirymonth").textContent = "";
  return (document.getElementById("expirydateoncard").innerHTML =
    monthToString.concat("/YY"));
}
function displayExpiryYear() {
  let expYear = document.getElementById("expyear").value;
  yearToString = expYear.toString();
  if (expYear.length == 0) {
    return (document.getElementById("expirydateoncard").innerHTML =
      displayExpiryMonth());
  } else if (displayExpiryMonth().toString() == "MM/YY") {
    return (document.getElementById("expirydateoncard").innerHTML = "MM/YY");
  } else document.querySelector(".expiryyear").textContent = "";
  return (document.getElementById("expirydateoncard").innerHTML =
    displayExpiryMonth().replace("YY", "").concat(yearToString));
}

function displayCVCNumber() {
  let cvcNumber = document.getElementById("cvc").value;
  if (cvcNumber.length == 0) {
    return (document.getElementById("cvcnumberoncard").innerHTML = "000");
  }
  document.querySelector(".cvcnumber").textContent = "";
  return (document.getElementById("cvcnumberoncard").innerHTML =
    document.getElementById("cvc").value);
}
