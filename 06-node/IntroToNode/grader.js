function average(scores) {
  return Math.round(scores.reduce(function(acc, number) {
    return number + acc;
  }, 0) / scores.length)
}

const scores = [90, 98, 89, 100, 100, 86, 95];
console.log(average(scores));

const scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));
