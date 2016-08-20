/*function firstPrompt (numberVictims){*/
    var numberVictims = prompt("Please enter number of victims.");
//    var numberVolunteers = prompt("Please enter number of volunteers.");
    numberVictims= parseInt(numberVictims);
//    numberVolunteers=parseInt(numberVolunteers);
    var victimInfo2 = [];
//    var victimInfo3 = [];
  
  
  
  
for (var i=0; i< numberVictims; i++) {
    var name = prompt("Enter disaster victim name");
    var address = prompt("Enter disaster victim address");
    var number = prompt("Enter disaster victim phone number");
    var info = {name:name, address:address, number:number};
    victimInfo2.push(info);
}


console.log(victimInfo2);



var numberVolunteers = prompt("Please enter number of volunteers.");
numberVolunteers=parseInt(numberVolunteers);
var victimInfo3 = [];



for (var i=0; i< numberVolunteers; i++) {
    var name1 = prompt("Enter volunteer name");
    var address1 = prompt("Enter volunteer address");
    var number1 = prompt("Enter volunteer phone number");
    var info1 = {name:name1, address:address1, number:number1};
    victimInfo3.push(info1);
}


console.log(victimInfo3);



 function alertInfo () {
     console.log(victimInfo2);
     console.log(victimInfo3);
 }

alert("Victim" + victimInfo2 + "Volunteer" + victimInfo3);








/*function vicFunc() {

var victimBox = prompt("Please enter name of victim")

if (victimBox != null) {
    document.getElementById("victimBox").innerHTML =
    "victimBox";
}

}
*/



// <p id="demo"></p>

// <script>
// function myFunction() {
//     var person = prompt("Please enter your name", "Harry Potter");
//     if (person != null) {
//         document.getElementById("demo").innerHTML =
//         "Hello " + person + "! How are you today?";
//     }
// }
// </script>



// if(getElementById("victimBox") > null) {
//     document.getElementById("victimBox").innerHTML=
//     "Please enter address?";
// };



// function vicFunc () {
//     var 
// }































//  function victimsBox() {
//             if (button onclick="victimsBox()">victimInfo/button) {
//                 prompt ("Enter number of victims.")
//             };
    


// /* function doSomething(x, y) {
// }
// doSomething(3, 4);

// document.write(doSomething);
// */



// document.write("<h1>Main title</h1>");



// function practice() {
//     for (var i = 0; i <= 10; i++) {
//         document.write(i);
//     }
// }



//   if { victimsBox// JavaScript File


// // //////////////// Create 3 onclick boxes, victim info, volunteer info, victim/volunteer info

// ////////////////// victim info, clicked, prompts victim number user input, creates "x" number of boxes to be filled out.


/////  




//  -  for loop used to mark when to stop prompts created based up "x" input
//  -  write out victim info once prompt box submitted
//  -  ....Position of victim info written out....

// Volunteer info follows same process

// Once both victim and voluneer info is submitted, victim/volunteer info click box displays alert of victim and volunteer info vertically compared to one another
//   - Table within alert box

//  How to create multiple input fields within a prompt box?














//  If prompt box is greater than null, list user input number under victims box, prompt user variable to print 3 seperate prompt boxes ("enter name, enter address, enter phone number, ") for number of victims
// entered.
//  Print each user input after it is entered.   User input is displayed with 1 <br> between each disaster victim input.  Create a break space every time 3 boxes are entered, or 1 of each type of prompt box 
//  is entered.

// Copy/continue with volunteers

//  Take and compare victim and volunteer info, push into alert box for "Victim/Volunteer info button"