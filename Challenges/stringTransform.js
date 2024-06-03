function transformString(input) {
  let length = input.length;
  let output = "";

  // If the length of the string is divisible by both 3 and 5, perform both operations in order
  if (length % 3 === 0 && length % 5 === 0) {
    // Reverse the entire string
    input = input.split("").reverse().join("");

    // Replace each character with its ASCII code
    for (let i = 0; i < input.length; i++) {
      output += input.charCodeAt(i) + " ";
    }
  }
  // If the length of the string is divisible by 3
  else if (length % 3 === 0) {
    // Reverse the entire string
    input = input.split("").reverse().join("");
    output = input;
  }
  // If the length of the string is divisible by 5
  else if (length % 5 === 0) {
    // Replace each character with its ASCII code
    for (let i = 0; i < input.length; i++) {
      output += input.charCodeAt(i) + " ";
    }
  }
  // If none of the conditions are met, keep the string unchanged
  else {
    output = input;
  }

  return output.trim();
}

// Example usage:
const input = "qwertyuiopasdfg";
const output = transformString(input);
console.log("Input:", input);
console.log("Output:", output);
