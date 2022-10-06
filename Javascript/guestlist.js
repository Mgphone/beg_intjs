var guestList = ["a", "b", "c"]
var guestName = prompt("what is your name");

if (guestList.includes(guestName)) {
  alert("Welcome " + guestName);

} else {
  alert("Sorry" + guestName + " May be Next time");
}
