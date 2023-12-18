function indexOfIgnoreCase(s1, s2) {
// Check for edge cases
  if (str.length === 0 || subStr.length === 0) {
    return -1;
  }

  // Convert both strings to lowercase for case-insensitive comparison
  const lowercaseStr = str.toLowerCase();
  const lowercaseSubStr = subStr.toLowerCase();

  // Iterate through the characters of lowercaseStr
  for (let i = 0; i <= lowercaseStr.length - lowercaseSubStr.length; i++) {
    let match = true;

    // Check if substring matches at the current position
    for (let j = 0; j < lowercaseSubStr.length; j++) {
      if (lowercaseStr[i + j] !== lowercaseSubStr[j]) {
        match = false;
        break;
      }
    }

    // If a match is found, return the index
    if (match) {
      return i;
    }
  }

  // If no match is found, return -1
  return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
