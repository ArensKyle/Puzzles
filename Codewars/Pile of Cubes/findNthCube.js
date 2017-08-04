function findNb(m) {    
    var sum = 0;
    var cubeRoot = Math.pow(m, 1/3);
    for (var n = 1; n < cubeRoot; n++) {
      sum = Math.pow(((n * (n + 1)) / 2), 2);
      if (sum == m) {
        return n;
      }
    }
    return -1;
}
