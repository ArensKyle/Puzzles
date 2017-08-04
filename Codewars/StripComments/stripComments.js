function solution(input, markers){
  for (var i = 0; i < markers.length; i++) {
    console.log(markers[i]);
    if (markers[i] === ("$" || "^" || ".")) {
      //cases to account for special regex characters
      var commentReg = new RegExp("\\" + markers[i] + ".{1,}\n", "g"); 
      var commentRegEOF = new RegExp("\\" + markers[i] + ".{1,}$", "g");
    } else {
      //different case for last line, as is different replacement.
      var commentReg = new RegExp(markers[i] + ".{1,}\n", "g");
      var commentRegEOF = new RegExp(markers[i] + ".{1,}$", "g");
    }
    input = input.replace(commentReg, "\n");
    input = input.replace(commentRegEOF, "");
    // truncate whitespace
    input = input.replace(/\s{1,}\n/g, "\n");
    input = input.replace(/\s{1,}$/g, "");
  }
  return input;  
}
