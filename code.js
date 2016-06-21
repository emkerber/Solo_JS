var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

//1
console.log('Months listed are', stringList[0] + ',', stringList[1] + ',', stringList[2] + '.');

//2
console.log(numList[(numList.length)-1]);

//3
console.log(numList.join());

//4
console.log(numList[0] + numList[1] + numList[2]);

//5
if (boolList[1] === true) {
  console.log(numList[0] + numList[2]);
} else {
  console.log(numList[1] * numList[1]);
}

//6
for (var i = 0; i < 3; i++) {
  if (boolList[i] === true) {
    console.log(i);
  }
}

//7
var newArray = stringList.concat(numList, boolList);
console.log(newArray.reverse());
