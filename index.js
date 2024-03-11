// Define an array of objects representing students
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 70 },
  { name: 'Charlie', grade: 90 },
  { name: 'David', grade: 65 },
  { name: 'Eve', grade: 75 },
]

// Initialize variables to store total grade and number of students
let totalGrade = 0

// Using a for...of loop to iterate over each student in the array
for (const student of students) {
  // Access each student object directly in the loop
  // Add the grade of the current student to the total grade
  totalGrade += student.grade
}

// Calculate the average grade by dividing the total grade by the number of students
const averageGrade = totalGrade / students.length

// Output the average grade to the console
console.log('Average Grade:', averageGrade)

// Define an object representing a student
const student = {
  name: 'Alice',
  grade: 85,
  subject: 'Math',
}

// Using a for...in loop to iterate over the properties of the student object
for (const key in student) {
  // Check if the property is directly defined on the object and not inherited from the prototype chain
  if (student.hasOwnProperty(key)) {
    // Output each property name and its corresponding value to the console
    console.log(`${key}: ${student[key]}`)
  }
}
