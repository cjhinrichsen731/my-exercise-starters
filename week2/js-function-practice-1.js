// JavaScript File

///// #1

function tripleFive(five) {
    for (var i = 1; i <= 3; i++) {
        console.log(five);
    }
}


tripleFive("five!");


///// #2

function lastLetter(string) {
    console.log(string.charAt(string.length - 1));
}

lastLetter("hello");


///// #3

function square(integer) {
    console.log(integer * integer);
}

square(10);



///// #4
function negate(integer1) {
    console.log(integer1 * -1);
}

negate(-8);



///// #5

function toArray(var1, var2, var3) {
    var numbersArray = [var1, var2, var3];
    return numbersArray;
}
console.log (1,2,3);
// console.log (toArray(1, 2, 3));
// var myArray=toArray(5,6,7);
// console.log (myArray);




///// #6

function startswithA(aWords) {
    if (aWords.charAt(0) == "A") {
        console.log("true")
    }
    else if (aWords.charAt(0) == "a") {
        console.log("true")
    }
    else {
        console.log("false")
    }
}


startswithA("animal");

///// #7

function excite(exclamation) {
    console.log(exclamation + "!!!");

}

excite("hello");

///// #9 

function tiny(zeroOne) {
    if (zeroOne >= 1) {
        console.log("false");
    }
    else if (zeroOne <= 0) {
        console.log("false");
    }
    else {
        console.log("true")
    }

}
tiny(0.3);



function sun(sunWords) {
    if (sunWords.indexOf ("sun") >=0 ) {
     console.log ("true");
    } else {
        console.log ("false");
    }
    
}

sun("unday");


function sun1(sunWords) {
    for (var i= 0; i < sunWords.length; i+=1) {
        if ("sun" == sunWords.substring (i, i+3)) {
            console.log ("true");
            return true;
        }
    }
    
    console.log ("false");
    return false;
}

sun1("asdfsunasdf");







//#10

function getSeconds(minutes) {
    console.log (minutes.substring(0,2) + minutes.substring(3,4));
}

getSeconds('24:33');

//getSeconds('01:30') should return 90
//getSeconds('10:25') should return 625




// chopin (myArray)

// function go () {
//     var arr = [];
//     for (var i=0; i<=10000000; i++) {
//         arr[i] = 9;
//     }
//     console.log(arr);
// }

// go();

// //// #8
// function sun(sunWords) {
//     if (sunWords) {
//         var re1 = "sun";
//         console.log("true");
//     }
//     else {
//         console.log("false");
//     }
// }

// sun(sunday);

// function sun(sunWords) {
//     if (sunWords) {
//         var re1 = /"sun"/;
//         console.log(/sun/.test("sunasdf"));
//     }






    