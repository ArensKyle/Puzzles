function validBraces(braces){
  var len = braces.length/2; //store length, so that we can be sure to iterate enough, despite removals.
  for (var i = 0; i < len; i++) {
    //three cases to remove from the string as they are valid
    braces = braces.replace("()", "");
    braces = braces.replace("[]", "");
    braces = braces.replace("{}", "");
  }
  if (braces === "") {
    return true;
  } else {
    return false;
  }
}
