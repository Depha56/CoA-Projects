function hasSubarrayWithSum(arr, target) {
  let start = 0; // Initialize the starting index
  let currentSum = 0; // Initialize the sum of the current elements being considered

  // Iterate through the array with the ending index
  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end]; // Add the current element to the sum

    // If the sum exceeds the target, adjust by removing elements from the start
    if (currentSum > target) {
      currentSum -= arr[start]; // Subtract the element at the starting index
      start += 1; // Move the starting index to the right

      // If the sum still exceeds the target, continue adjusting by removing elements from the start
      if (currentSum > target) {
        currentSum -= arr[start];
        start += 1;
      }
    }

    // If the sum equals the target, return true
    if (currentSum === target) {
      return true;
    }
  }

  // If no such subarray is found, return false
  return false;
}

// Example usage
const arr = [1, -1, 5, -2, 3];
const target = 3;
console.log(hasSubarrayWithSum(arr, target)); // Output: true
