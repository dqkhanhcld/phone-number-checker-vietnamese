const phoneNumberChecker = require('../src/index.js');


const phoneNumber1 = '0384369377';
const phoneNumber2 = '01234567890';


console.log (phoneNumberChecker.isVietNamesePhoneNumber10Ditgits(phoneNumber1)); // true
console.log (phoneNumberChecker.isVietNamesePhoneNumber10Ditgits(phoneNumber2)); //false

