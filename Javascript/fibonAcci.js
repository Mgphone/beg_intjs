var StorageArray = [];
//var n="";
function fibonacciGenerator(n) {
  if (n === 1) {
    StorageArray.push(0);
  } else if (n === 2) {
    StorageArray.push(0, 1);

  } else {
        StorageArray=[0,1]
    for (var i = 2; i < n; i++) {
      StorageArray.push(StorageArray[i-2]+StorageArray[i-1]);//StorageArray.length
    }
  }
  console.log(StorageArray);
}
