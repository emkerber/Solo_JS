var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];


//1
var monthsList = '';

for (var i = 0; i < 3; i++) {
  if (i < 2) {
    monthsList += stringList[i] + ', ';
  } else {
    monthsList += stringList[i] + '.'
  }
}

console.log('Months listed are', monthsList);


//2
console.log(numList[(numList.length)-1]);


//3
var numString = '';

for (var i = 0; i < 3; i++) {
  numString += numList[i];
}

console.log(numString);


//4
var numTotal = 0;

for (var i = 0; i < 3; i++) {
  numTotal += numList[i];
}

console.log(numTotal);


//5
if (boolList[1] === true) {
  console.log(numList[0] + numList[2]);
} else {
  console.log(numList[1] * numList[1]);
}


//6
for (var i = 0; i < 3; i++) {
  if (boolList[i] === true) {
    console.log(numList[i]);
  }
}


//7
var arrayOfArrays = [];

for (var i = 0; i < 3; i++) {
  arrayOfArrays.push(stringList[i]);
}

for (i = 0; i < 3; i++) {
  arrayOfArrays.push(numList[i]);
}

for (i = 0; i < 3; i++) {
  arrayOfArrays.push(boolList[i]);
}

console.log(arrayOfArrays.reverse());
