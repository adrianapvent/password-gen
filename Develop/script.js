// Assignment code here
var enter;
var confirmNum;
var confirmSpecial;
var confirmAbcUpper;
var confirmAbcLower;

// password valuables
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var abcUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var abcLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var special = ['!', '@', '#', '%', '$', '^', '&', '*', '(', ')', '?'];
var space = "";

var returnPassword = "";


// Get references to the #generate element
var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  let ps = writePassword();
  console.log(ps);
  document.getElementById("password").placeholder = ps;
})


// Write password to the #password input
function writePassword() {
  // requests user info
  enter = parseInt(prompt("Create a password with 8 and 128 characters."))
  if (!enter) {
    alert ("Enter password");
  } else if (enter < 8 || enter > 128) {
    //validate user input
    //prompt
    enter = parseInt(prompt("You must create a password that is between 8 and 128 characters"));
  }


  confirmNum = confirm("Will this contain numbers?");
  confirmAbcUpper = confirm("Will this contain capitalized letters?");
  confirmAbcLower = confirm("Will this contain lower case letters?");
  confirmSpecial = confirm("Will this contain special characters");

  if (confirmNum) {
    space = space + space.concat(num)
  }

  if (confirmAbcUpper) {
    space = space + space.concat(abcUpper)
  }

  if (confirmAbcLower) {
    space = space + space.concat(abcLower)
  }

  if (confirmSpecial) {
    space = space + space.concat(special)
  }


  // password variable is in array
  var password = [];

  // //  Start Random selection for all variables: 
  for (var i = 0; i < enter; i++) {
    returnPassword = returnPassword + space[Math.floor(Math.random() * space.length)];
    console.log(returnPassword);
  }
  // This joins the password array and converts it to a string

  return returnPassword;

}

