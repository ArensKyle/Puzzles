function comp(a1, a2){
  if ((a1 == null) || (a2 == null)) {
    return false;
  }
  for (var i = 0; i < a1.length; i++) {
    if (a2.includes(a1[i] * a1[i])) {
      a2.splice(a2.indexOf(a1[i] * a1[i]), 1);
      a1.splice(i, 1);
      i--;
    }
    else {
      return false;
    }
  }
  if ((a2.length > 0) || (a1.length > 0)) {
    return false;
  }
  return true;
}
