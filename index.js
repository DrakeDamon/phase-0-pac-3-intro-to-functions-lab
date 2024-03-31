// Function to shout a string (convert it to uppercase)
function shout(string) {
  return string.toUpperCase();
}

// Function to whisper a string (convert it to lowercase)
function whisper(string) {
  return string.toLowerCase();
}

// Function to log a shout to the console
function logShout(string) {
  console.log(shout(string));
}

// Function to log a whisper to the console
function logWhisper(string) {
  console.log(whisper(string));
}

// Function to respond to different string inputs
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    // Respond to a lowercase input
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    // Respond to an uppercase input
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    // Respond to a specific string
    return "I would love to!";
  }
}

