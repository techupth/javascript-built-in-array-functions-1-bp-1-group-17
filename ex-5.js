const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  function sum(accumulator, currentValue) {
    return accumulator + currentValue.score;
  }
  const sumScore = students.reduce(sum,0);
  const averageScore = sumScore/students.length;
  return averageScore
}
console.log(getAverageStudentScore(students)); // Output: 87.5
