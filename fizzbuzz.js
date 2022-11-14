var output = "";
var factor_1 = 3;
var factor_2 = 5;

for (var l = 1; l <= 100; l++) {
  output = "";
  if (l % factor_1 == 0 || l % factor_2 == 0) {
    if (l % factor_1 == 0) { output = output + "Fizz"; }
    if (l % factor_2 == 0) { output = output + "Buzz"; }
  }
  else { output = l; }
  console.log(output);
}
