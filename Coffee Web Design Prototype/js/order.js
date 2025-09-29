const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const addons = document.getElementById("addons");
const menu = document.getElementById("menu");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const nameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const addressValue = address.value.trim();
  const addonsValue = addons.value.trim();
  const menuValue = menu.value.trim();

  if (nameValue === "") {
    setErrorFor(fullname, "Please enter your full name");
  } else if (!isAlphabetical(nameValue)) {
    setErrorFor(fullname, "Full name can not contain any digits");
  } else if (!isValidFullName(nameValue)) {
    setErrorFor(fullname, "Full name must be at least 2 words");
  } else {
    setSuccessFor(fullname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Please enter your email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please enter a valid email");
  } else {
    setSuccessFor(email);
  }

  if (addressValue === "") {
    setErrorFor(address, "Please enter your address");
  } else {
    setSuccessFor(address);
  }

  let price = 0;
  if (addonsValue === "") {
    setErrorFor(addons, "Please Choose your add ons");
  } else {
    price += 5000;
    setSuccessFor(addons);
  }

  if (menuValue === "") {
    setErrorFor(addons, "Please Choose your menu");
  } else {
    setSuccessFor(addons);
  }

  if (menuValue === "Special Espresso") {
    price += 20000;
  } else if (menuValue === "Latte Espresso") {
    price += 30000;
  } else {
    price += 25000;
  }

  document.getElementById("totalprice").value = "Rp " + price.toLocaleString();
}

function isAlphabetical(input) {
  for (const character of input) {
    const code = character.charCodeAt(0);

    if (code >= 48 && code <= 57) {
      return false;
    }
  }

  return true;
}

function isValidFullName(input) {
  const trimmed = input.trim();
  const spaceCount = (trimmed.match(/ /g) || []).length;

  if (spaceCount < 1 || trimmed.startsWith(" ") || trimmed.endsWith(" ")) {
    return false;
  }

  return true;
}

function isEmail(input) {
  const atIndex = input.indexOf("@");
  const lastDotIndex = input.lastIndexOf(".");
  const hasSpace = input.includes(" ");
  const endsWithCom = input.endsWith(".com");

  const hasAt = atIndex > 0;
  const hasDot = lastDotIndex > 0;
  const dotAfterAt = lastDotIndex > atIndex + 1;
  const dotNotLast = lastDotIndex < input.length - 1;

  if (hasAt && hasDot && dotAfterAt && dotNotLast && !hasSpace && endsWithCom) {
    return true;
  }

  return false;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-group error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-group success";
}
