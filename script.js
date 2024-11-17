// Initialize counters
let lengthCounter = 0;
let wordCounter = 1;  // Start with 1 because there's at least one word
let vowelCounter = 0;

// Define vowels
const vowels = "aeiouAEIOU";

// Read the sentence (input can be taken from prompt or predefined)
let sentence = prompt("Enter a sentence:");

// Process the sentence character by character
for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    
    // Count the length of the sentence
    lengthCounter++;
    
    // Check if the character is a vowel
    if (vowels.includes(char)) {
        vowelCounter++;
    }
    
    // Count the words (by counting spaces)
    if (char === ' ') {
        wordCounter++;
    }
}

// Output the results
console.log("Length of sentence:", lengthCounter);
console.log("Number of words:", wordCounter);
console.log("Number of vowels:", vowelCounter);
