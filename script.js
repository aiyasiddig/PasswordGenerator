var length = Number(prompt("Enter a password length between 8 and 128")),
  charType = prompt("Enter up to 3 character types: special, numeric, uppercase, lowercase."),

  password = generatePassword();
document.getElementById("display").value = password;
document.getElementById('copy-btn').addEventListener('click', copyPassword);

function generatePassword() {
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };
  var charSet = charType? charType.split(/,\s*|\s+/).reduce((acc,curr)=>acc + charSets[curr.trim().toLowerCase()],"") : charSets.lowercase;
  var retVal = "";
  for (var i = 0; i < length; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}

function copyPassword() {
  document.getElementById("display").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}