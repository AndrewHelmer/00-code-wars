function validatePIN (pin) {
  let steve = /^(\d{4}|\d{6})$/.test(pin);
  return steve
 }