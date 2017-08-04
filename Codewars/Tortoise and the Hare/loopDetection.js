function loop_size(node){
  if (node === null) {
    return 0;
  }
  var head = node;
  var i = 0;
  while (node !== null) {
    var counter = head;
    node = node.next;
    i++;
    var j = 0;
    while (counter !== node) {
      counter = counter.next;
      j++;
    }
    if (j < i) {
      return i - j;
    }
  }
  return 0;
}
