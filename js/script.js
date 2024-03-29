// Shane Jeremich
// November 15th, 2023
// Code Exercise 07: Final Project

// Setting up the variables for the form
const calculate = document.getElementById("calculate");
const heightFeet = document.getElementById("height-feet");
const heightInches = document.getElementById("height-inches");
const weight = document.getElementById("weight");

// Setting up the event listener for the form
calculate.addEventListener("click", function (e) {
  e.preventDefault();

  // If the form is valid, then run the BMI calculation
  if (heightFeet.reportValidity() && heightInches.reportValidity() && weight.reportValidity()) {
    // Setting up the variables for the BMI calculation
    // The height is calculated by multiplying the value of the heightFeet input element by 12 and adding the value of the heightInches input element to the result of the multiplication (the value of the input element is a string value, so it is converted to a number using parseInt() method) and stored in the height variable as a number value
    // The weight is parsed and converted to a number from a string value (the value of the input element) using parseInt() method
    // The BMI is calculated using the formula: BMI = (weight / (height * height)) * 703
    // The BMI is displayed in the bmiResult element
    // The BMI range is displayed in the bmiRange element
    // The BMI result description is displayed in the bmiResultDescription element
    // The BMI image is displayed in the bmiImage element
    // The BMI image alt text is displayed in the bmiImage element
    // The form is reset to its default state after the BMI calculation is complete and the BMI result is displayed in the bmiResult element
    const height = parseInt(heightFeet.value * 12) + parseInt(heightInches.value);
    const weightValue = parseInt(weight.value);
    const bmi = (weightValue / (height * height)) * 703;
    const bmiResult = document.getElementById("bmi-result");
    const bmiRange = document.getElementById("bmi-range");
    const bmiResultDescription = document.getElementById("bmi-result-description");
    const bmiImage = document.getElementById("bmi-image");
    const bmiScore = document.createElement("span");
    bmiScore.className = "bmi-score";
    bmiScore.textContent = "BMI Score";

    // Reset the form to its default state
    function resetForm() {
      heightFeet.value = "";
      heightInches.value = "";
      weight.value = "";
      heightFeet.focus();
    }

    bmiResultDescription.innerHTML = `Your BMI is ${bmi.toFixed(1)}, indicating your weight is in `;

    // The displayBMIResult() function takes five arguments: weightClass, weightText, rangeText, imageSrc, and imageAlt
    // The weightClass argument is used to set the class attribute of the bmiResult and bmiRange elements
    // The weightText argument is used to set the text content of the bmiResultDescription element
    // The rangeText argument is used to set the text content of the bmiRange element
    // The imageSrc argument is used to set the src attribute of the bmiImage element
    // The imageAlt argument is used to set the alt attribute of the bmiImage element
    function displayBMIResult(weightClass, weightText, rangeText, imageSrc, imageAlt) {
      bmiResult.innerHTML = `${bmi.toFixed(1)}`;
      bmiResult.className = `bmi-calculator__result ${weightClass}`;
      bmiResult.appendChild(bmiScore);

      // Displaying the height
      let bmiHeight = document.getElementById("bmi-height");
      if (heightInches.value === "12") {
        heightFeet.value = parseInt(heightFeet.value) + 1;
        heightInches.value = "0";
      }
      bmiHeight.textContent = `Height: ${heightFeet.value} feet ${heightInches.value} inches`;

      // Displaying the weight
      let bmiWeight = document.getElementById("bmi-weight");
      bmiWeight.textContent = `Weight: ${weight.value} lbs`;

      // Displaying the BMI range and BMI result description
      bmiRange.innerHTML = rangeText;
      bmiRange.className = `bmi-range ${weightClass}`;
      bmiResultDescription.innerHTML += `<span class="uppercase">${weightText}</span> range for adults of your height`;
      bmiImage.src = imageSrc;
      bmiImage.alt = imageAlt;
    }

    // If/Else statement to determine the BMI range and BMI result description
    // If the BMI is less than 18.5, then the displayBMIResult() function is called with the following arguments: "under-weight", "Under Weight", "Under Weight", "img/graphicsCE07/underWeight.jpg", and "Under Weight"
    // If the BMI is greater than or equal to 18.5 and less than 24.9, then the displayBMIResult() function is called with the following arguments: "normal-weight", "Normal Weight", "Normal Weight", "img/graphicsCE07/healthyWeight.jpg", and "Normal Weight"
    // If the BMI is greater than or equal to 24.9 and less than 29.9, then the displayBMIResult() function is called with the following arguments: "over-weight", "Over Weight", "Over Weight", "img/graphicsCE07/overWeight.jpg", and "Over Weight"
    // If the BMI is greater than or equal to 29.9 and less than 35, then the displayBMIResult() function is called with the following arguments: "obese", "Obese", "Obese", "img/graphicsCE07/obeseWeight.jpg", and "Obese"
    // If the BMI is greater than or equal to 35, then the displayBMIResult() function is called with the following arguments: "extremely-obese", "Extremely Obese", "Extremely Obese", "img/graphicsCE07/extremeObeseWeight.jpg", and "Extremely Obese"
    // The resetForm() function is called to reset the form to its default state
    if (bmi < 18.5) {
      displayBMIResult("under-weight", "Under Weight", "Under Weight", "img/graphicsCE07/underWeight.jpg", "Under Weight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      displayBMIResult("normal-weight", "Normal Weight", "Normal Weight", "img/graphicsCE07/healthyWeight.jpg", "Normal Weight");
    } else if (bmi >= 24.9 && bmi < 29.9) {
      displayBMIResult("over-weight", "Over Weight", "Over Weight", "img/graphicsCE07/overWeight.jpg", "Over Weight");
    } else if (bmi >= 29.9 && bmi < 35) {
      displayBMIResult("obese", "Obese", "Obese", "img/graphicsCE07/obeseWeight.jpg", "Obese");
    } else if (bmi >= 35) {
      displayBMIResult("extremely-obese", "Extremely Obese", "Extremely Obese", "img/graphicsCE07/extremeObeseWeight.jpg", "Extremely Obese");
    }
    resetForm();
  }

  // Refresh the page when the reset button is clicked
  let reset = document.getElementById("reset");
  reset.addEventListener("click", function (e) {
    e.preventDefault();
    location.reload();
  });
});

// Setting up the variables for the footer
let copyright = document.getElementById("footer__text");
let year = new Date().getFullYear();
let url = "https://www.shanejeremich.com";

// Displaying the current year and my name in the footer
copyright.innerHTML = `&copy; Copyright ${year} | 
  <a href=${url} target="_blank">Shane Jeremich</a>`;
