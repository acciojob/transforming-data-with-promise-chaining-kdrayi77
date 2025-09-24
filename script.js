//your JS code here. If required.
// Helper function to simulate a delay and return a Promise
function delayedPromise(fn, delay) {
  return (value) => new Promise((resolve) => {
    setTimeout(() => {
      const result = fn(value);
      document.getElementById('output').textContent = result.label;
      resolve(result.value);
    }, delay);
  });
}

// Event listener for the button
document.getElementById('btn').addEventListener('click', function () {
  const inputValue = parseFloat(document.getElementById('ip').value);
  const outputDiv = document.getElementById('output');

  if (isNaN(inputValue)) {
    outputDiv.textContent = 'Please enter a valid number.';
    return;
  }

  outputDiv.textContent = ''; // Clear previous output

  // Step 1: Initial Promise - resolves with input number after 2 seconds
  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.textContent = `Result: ${inputValue}`;
      resolve(inputValue);
    }, 2000);
  })
    // Step 2: Multiply by 2 after 2 seconds
    .then(delayedPromise((num) => ({
      value: num * 2,
      label: `Result: ${num * 2}`,
    }), 2000))

    // Step 3: Subtract 3 after 1 second
    .then(delayedPromise((num) => ({
      value: num - 3,
      label: `Result: ${num - 3}`,
    }), 1000))

    // Step 4: Divide by 2 after 1 second
    .then(delayedPromise((num) => ({
      value: num / 2,
      label: `Result: ${num / 2}`,
    }), 1000))

    // Step 5: Add 10 after 1 second
    .then(delayedPromise((num) => ({
      value: num + 10,
      label: `Final Result: ${num + 10}`,
    }), 1000));
});
