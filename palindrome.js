function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  var fString = str.split("");
  var rString = str.split("").reverse();
  // console.log(rString + "R");
  // console.log(fString + "F");
  if (fString.join() === rString.join()) {
    return true;
  }else{
    return false;
  }
}

palindrome("A but tuba");
