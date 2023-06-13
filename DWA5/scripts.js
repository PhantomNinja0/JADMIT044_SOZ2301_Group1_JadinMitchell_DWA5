// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

/**
 * @param {string|number} value
 * @returns {boolean}
 */

const isNumeric = (value) => !isNaN(value) && value !== "";

/**
 * @param {string} dividend
 * @param {string} divider
 * @returns {string|null}
 * @throws {Error}
 */

const validateInputs = (dividend, divider) => {
  if (dividend === "" || divider === "") {
    return "Division not performed. Both values are required in inputs. Try again.";
  }
  if (divider <= 0) {
    console.error("Invalid input: negative or zero divider");
    return "Division not performed. Invalid number provided. Try again.";
  }
  if (isNaN(dividend) || isNaN(divider)) {
    throw new Error("Invalid input: not a number");
  }
  
  return null;
};


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    const errorMessage = validateInputs(dividend, divider);
    if (errorMessage) {
      result.innerText = errorMessage;
      return;
    }

    const divisionResult = Math.floor(dividend / divider);
    result.innerText = divisionResult;
  } catch (error) {
    console.error(error);
    document.body.innerHTML =
      "Something critical went wrong. Please reload the page.";
  }
});