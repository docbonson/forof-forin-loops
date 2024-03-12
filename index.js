// Define an array of objects representing weather forecasts
const forecasts = [
  { day: 'Monday', temperature: 25 },
  { day: 'Tuesday', temperature: 28 },
  { day: 'Wednesday', temperature: 22 },
  { day: 'Thursday', temperature: 30 },
  { day: 'Friday', temperature: 27 },
]

// Initialize variables to store total temperature and number of forecasts
let totalTemperature = 0

// Using a for...of loop to iterate over each forecast in the array
for (const forecast of forecasts) {
  // Access each forecast object directly in the loop
  // Add the temperature of the current forecast to the total temperature
  totalTemperature += forecast.temperature
}

// Calculate the average temperature by dividing the total temperature by the number of forecasts
const averageTemperature = totalTemperature / forecasts.length

// Output the average temperature to the console
console.log('for...of Average Temperature:', averageTemperature)
//"for...of Average Temperature: 26.4"

// Define an object representing a weather observation
const observation = {
  day: 'Monday',
  temperature: 25,
  condition: 'Sunny',
}

// Using a for...in loop to iterate over the properties of the observation object
for (const key in observation) {
  // Check if the property is directly defined on the object and not inherited from the prototype chain
  if (observation.hasOwnProperty(key)) {
    // Output each property name and its corresponding value to the console
    console.log(`for...in - ${key}: ${observation[key]}`)
    /*
    for...in - day: Monday
    for...in - temperature: 25
    for...in - condition: Sunny
    */
  }
}
