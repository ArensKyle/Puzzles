function pascalsTriangle(n) {
  var triangle = [];
  for (var i = 1; i <= n; i++) {
    var row = [1];
    for (var j = 1; j < i; j++) {
      //calculate the contents of any given row of pascals triangle
      //given row i, and position j
      row.push(row[j-1]*(i-j)/(j));
    }
    triangle = triangle.concat(row);
  }
  return triangle;
}
