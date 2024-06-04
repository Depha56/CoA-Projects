function transformString(input) {
  let length = input.length;
  let output = "";
  // If the length of the string is divisible by both 3 and 5
  if (length % 3 === 0 && length % 5 === 0) {
    // Reverse the entire string (store it in a separate variable)
    const reversedStr = input.split("").reverse().join("");

    // Create a new string with ASCII codes separated by spaces
    for (let i = 0; i < input.length; i++) {
      output += input.charCodeAt(i) + " ";
    }

    // Combine the reversed string and ASCII code string with a new line separator
    return `${reversedStr}\n${output.trim()}`;
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
const input = "Hello world hel";
const output = transformString(input);
console.log("Input:", input);
console.log("Output:", output);

