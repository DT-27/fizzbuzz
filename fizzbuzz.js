//fizzbuzz game
var array = 101;
for (var i = 0; i < array; i++) {
 if (i % 3 === 0 && i % 5 != 0 ) {
   console.log("fizz " + i);
 }else if (i % 5 === 0 && i % 3 != 0 ) {
   console.log("Buzz "+ i);
 }else if (i % 3 === 0 && i % 5 === 0) {
   console.log("fizzbuzz " +  i);
 }else {
   console.log(i + ' is not divisible either');
 }

}
