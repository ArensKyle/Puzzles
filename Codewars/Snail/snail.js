function snail(array) {
  var spiral = [];
  var rowMin = 0;
  var colMin = 0;
  if (array[0].length == 0) {
    return [];
  }
  var rowMax = array.length;
  var colMax = array.length;
  
  while ((rowMin < rowMax) && (colMin < colMax)) {
    //Print top remaining row
    for (var i = colMin; i < colMax; i++) {
      spiral.push(array[rowMin][i]);
    }
    rowMin++;
    
    //Iterate right-most remaining column.
    for (var i = rowMin; i < rowMax; i++) {
      spiral.push(array[i][colMax-1]);
    }
    colMax--;
    
    //Iterate bottom remaining row
    if (rowMin < rowMax){
      for (var i = colMax - 1; i >= colMin; i--) {
        spiral.push(array[rowMax-1][i]);
      }
      rowMax--;
    }
    
    //Iterate left-most remaining column
    if (colMin < colMax) {
      for (var i = rowMax - 1; i >= rowMin; i--) {
        spiral.push(array[i][colMin]);
      }
      colMin++;
    }
  }
  
  return spiral;
};
