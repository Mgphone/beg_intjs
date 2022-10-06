var StorageArray = [];
//var n="";
function addingValue(n) {
  if (n === 1) {
    StorageArray.push(0);
  } else if (n === 2) {
    StorageArray.push(0, 1);

  } else {
    for (var i = 0; i < n; i++) {
      StorageArray.push(i);
    }
  }
  console.log(StorageArray);
}
addingValue(2);
