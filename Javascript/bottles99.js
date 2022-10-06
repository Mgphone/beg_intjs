var numberofBottles = 3;

while (numberofBottles > 0) {
  var bottleWord = "bottles";

  if (numberofBottles <= 1) {
    bottleWord = "bottle";
  }

  console.log(numberofBottles + " " + bottleWord + "  of beer on the wall, " + numberofBottles + " " + bottleWord + "  of beer");
  numberofBottles--;
  if (numberofBottles === 0) {
    bottleWord = "/ no more bottle";
  }
  console.log("Take one down and pass it around," + numberofBottles + " " + bottleWord + "of beer on the wall");
}
console.log("go and buy a beer");
