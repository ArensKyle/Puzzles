//i is reset on a successful if because it's 1am, and I don't want to fix this correctly at the moment
function reduce(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "NORTH" && arr[i + 1] == "SOUTH") {
      arr.splice(i + 1, 1);
      arr.splice(i, 1);
      i = 0;
    }
    else if (arr[i] == "SOUTH" && arr[i + 1] == "NORTH") {
      arr.splice(i + 1, 1);
      arr.splice(i, 1);
      i = 0;
    }
    else if (arr[i] == "EAST" && arr[i + 1] == "WEST") {
      arr.splice(i + 1, 1);
      arr.splice(i, 1);
      i = 0;
    }
    else if (arr[i] == "WEST" && arr[i + 1] == "EAST") {
      arr.splice(i + 1, 1);
      arr.splice(i, 1);
      i = 0;
    }
  }
  return arr;
};

function dirReduc(arr){
  console.log(arr);
  var red = [];
  var cur = arr;
  var temp = [];
  while (red != temp) {
    temp = red;
    red = reduce(cur);
    cur = red;
  }
  return cur;
}
