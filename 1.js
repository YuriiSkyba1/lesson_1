

/* 1 завдання  var person;
do {
  person = prompt("Введіть число >100", 0);
} while (person <= 100 && person != null);*/

// 2 завдання
/*nextPrime:
  for (var i = 2; i <= 10; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // простое
  }
*/
// 3 завдання
for (var k = 1; k <= 100; k++) {

if(k % 5 === 0 && k % 3 === 0){
console.log("FizzBuzz");
}
else if (k % 3 == 0){
console.log("Fizz");
}
else if (k % 5 == 0){
console.log("Buzz");
    }
    else {
    console.log(k);
  }
}
