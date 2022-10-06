function whoisPaying(){
    var numberOfPeople=name.length;
    var RandomPosition=Math.floor(Math.random()*numberOfPeople);
    var Person=name[RandomPosition];
    return Person+" is going to buy lunch today";
}
