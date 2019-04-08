var sentenceToEncode = ""; // Takes the sentence that the user wants to convert and sets it to a variable 
var arrayOfAsciiCharacters = []; // Creates an array of ASCII values of the sentence 
var convertedCharacters = [] // Creates an array of the convereted characters of the sentence

// Main method of the program
function test() {
    console.log("TEST");
    getSentence();
    sentenceToAscii();
    getSelection();
    printConvertedSentence();
    //document.getElementById("convertedSentence").innerHTML = convertedCharacters[0];
    
}
// --------------

// Takes the sentence that the user inputed and stores it in the sentenceToEncode variable
function getSentence() {
    sentenceToEncode = document.getElementById("textBox").value;
}
// -----------

// Converts the sentence to ASCII values
// Uses an array defined on Line 2 to store the values
// Binary, Oct, and Hex Functions will use this array for the ASCII values
function sentenceToAscii() {

    for (var i = 0; i < sentenceToEncode.length; i++) { // Iterates through the sentence
        arrayOfAsciiCharacters[i] = sentenceToEncode.charCodeAt(i); // Stores the ASCII char code of the character in "position i" in the array
    }
}
// ------------

// Function gets what the user selected between Binary, Oct, or Hex
// Then calls another function based on what the user selected
function getSelection() {
    if (document.getElementById("binary").checked == true) { // Checks to see if user selected the Binary option
    console.log("binary");
    toBinary();
    }

    else if (document.getElementById("oct").checked == true) { // Checks to see if user selected the Oct option
    console.log("oct");
    toOct();
    }

    else if (document.getElementById("hex").checked == true) { // Checks to see if user selected the Hex option
    console.log("hex");
    toHex();
    }

}
// ----------


// === Group of Functions that convert the text ===
// Converts the ASCII numbers in the array to Binary Form
function toBinary() {
    for(var i = 0; i < arrayOfAsciiCharacters.length; i++) {
    var binary = parseInt(arrayOfAsciiCharacters[i]); // Need to loop through the Array Now
    console.log(binary.toString(2)); // To string takes the number and converts it to base 2 or whatever is in the parameter
    convertedCharacters[i] = binary.toString(2);
    }
    //console.log(binary.toString(2)); // To string takes the number and converts it to base 2 or whatever is in the parameter
    arrayOfAsciiCharacters = [];
}
// -----------

// Converts the ASCII numbers in the array to Oct Form
function toOct() {
    for(var i = 0; i < arrayOfAsciiCharacters.length; i++) {
    var binary = parseInt(arrayOfAsciiCharacters[i]); // Need to loop through the Array Now    
    console.log(binary.toString(8)); // To string takes the number and converts it to base 8
    convertedCharacters[i] = binary.toString(8);
    }
    arrayOfAsciiCharacters = [];
}
// -----------

// Converts the ASCII numbers in the array to Hex Form
function toHex() {
    for(var i = 0; i < arrayOfAsciiCharacters.length; i++) {
    var binary = parseInt(arrayOfAsciiCharacters[i]); // Need to loop through the Array Now
    console.log(binary.toString(16)); // To string takes the number and converts it to base 16 
    convertedCharacters[i] = binary.toString(16);
    }
    arrayOfAsciiCharacters = [];
}
// --------
// === ===

//Prints the convertered string 
function printConvertedSentence() { 
    var str = convertedCharacters.toString(); // Takes the converted array and puts it into a string
    var newStr = str.replace(/,/g, " "); // Replaces the commas(/,/) globally(g) with the space character (" ")
    document.getElementById("convertedSentence").innerHTML = newStr; // Prints the final string to the webpage element "convertedSentence"
    convertedCharacters = []; // Resets the array for another sentence to put into it
}