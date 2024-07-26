// Select the form element from the document
const form = document.querySelector("form");

// Add an event listener for the 'submit' event on the form
form.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the height value from the input field and convert it to an integer
  const height = parseInt(document.querySelector("#height").value);

  // Get the weight value from the input field and convert it to an integer
  const weight = parseInt(document.querySelector("#weight").value);

  // Select the results element where we will display the output
  const results = document.querySelector("#results");

  // Validate the height input
  if (height === "" || height < 0 || isNaN(height)) {
    // If the height is invalid, display an error message
    results.innerHTML = `Please provide a valid height.`;
  }
  // Validate the weight input
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    // If the weight is invalid, display an error message
    results.innerHTML = `Please provide a valid weight.`;
  }
  // If both inputs are valid, calculate the BMI
  else {
    // Calculate the BMI using the formula: weight / (height/100)^2
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Initialize an empty string to store the BMI category
    let bmiCategory = "";

    // Determine the BMI category based on the calculated BMI
    if (bmi < 18.6) {
      bmiCategory = "Under Weight"; // BMI less than 18.6
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      bmiCategory = "Normal Range"; // BMI between 18.6 and 24.9
    } else {
      bmiCategory = "Overweight"; // BMI greater than 24.9
    }

    // Display the BMI result and category in the results element
    results.innerHTML = `Your BMI is <span>${bmi}</span> which means you are <span>${bmiCategory}</span>.`;
  }
});
