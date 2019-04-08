<link rel="stylesheet" type="text/css" href="/styleSheets/converter2.css"/> 
<!-- <script type="text/javascript" src="converter.js"></script> -->

<p id="convertedSentence"> This Is Your Converted Sentence<p>
<?php

$userChoice = $_POST["lang"]; // Choice between binary, oct, or hex that the user wants
$userSentence;
$g;
$myArray = [];
$convertedMyArray = [];

function getSentence() {
    global $userSentence;
    $userSentence = $_POST["toConvert"]; // Sentence that the user wants converted
    //print $userSentence;
}

/*
function printStuff() {
    global $userSentence, $g, $myArray;
    print $userSentence;
    print $g;
   // print $myArray[0];
    
}
*/

function sentenceToAscii() {
    global $myArray, $userSentence;
    $editSentence = $userSentence;

    for($i=0; $i < strlen($userSentence); $i++) {
        //echo "The number is: $i <br>";
        $char = $editSentence{0};
        $char = ord($char);
        $myArray[$i] = $char;
        //print $myArray[$i]; // Test to print the Array
        $editSentence = substr($editSentence, 1);
    }

}

function getSelection() {
    //$n = 12;
    global $userChoice;
    if($userChoice == "binary") {
        //$n = binary;
        toBinary();
    }
    else if ($userChoice == "oct") {
       // $n = octal;
        toOct();
    }
    else {
      //$n = hex;
        toHex();
    }
   // print $n;
}

function toBinary() {
global $myArray, $convertedMyArray;

    for ($x = 0; $x < count($myArray); $x++){
        $num = $myArray[$x];
        $num = decbin($num);
        $convertedMyArray[$x] = $num;
    //print $convertedMyArray[$x];
    }

}

function toOct() {
   global $myArray, $convertedMyArray;

    for ($x = 0; $x < count($myArray); $x++){
        $num = $myArray[$x];
        $num = decoct($num);
        $convertedMyArray[$x] = $num;
    //print $convertedMyArray[$x];
} 

}

function toHex() {
   global $myArray, $convertedMyArray;

    for ($x = 0; $x < count($myArray); $x++){
        $num = $myArray[$x];
        $num = dechex($num);
        $convertedMyArray[$x] = $num;
    //print $convertedMyArray[$x];
} 

}

function printConvertedSentence() {
    global $convertedMyArray;

    $convertedSentence = implode(" ", $convertedMyArray);

    print $convertedSentence;
}

/*
function toBindsaary() {
    global $g, $userSentence;
    //$g = hellothere;
    
    $a = $userSentence{0};
    $g = $a;


    //print $g;
} */

getSentence();
sentenceToAscii();
getSelection();
//printStuff();
printConvertedSentence();


/*
if($userChoice == "binary") {
    $n = binary;
}
else if ($userChoice == "oct" {
    $n = oct;
}
else if ($userChoice == "hex") {
    $n = hex;
}
else {

}

print $n;

*/


?>
