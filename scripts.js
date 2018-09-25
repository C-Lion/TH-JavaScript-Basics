//Now I know 3 different ways to output messages:
// 1. Dialogue box or alert (pop up) messages:
alert("Hey, Its time for more JS!");

//Write text on the HTML page:
document.write("Now it works!");

//Prints messages in the console: 
//very hand for troubleshooting. 
//Just make sure the console is open to see it!
//cmd+shift+j
console.log("Program Completed");

////How to see what was captured in the variable: 
alert(visitorName);
//If I want to see it, but not display it to the user: 
console.log(visitorName);
var visitorName = prompt('What is your name?');
//Just look in the console to see it: cmd+Shift+J
//But it only lists the value, so if I had several variables, 
//I need a way to tell them apart: better log messages. 

//Now lets combine strings to add the input from the user
//to create a custom string & then print it out to the page:
var message = "Hello " + visitorName + ". \nWelcome to Treehouse.";

//AKA contatenation
//Can user a long series of + between parts but it gets hard to read. 
//a better way is to do it in steps, each time putting what's on the right 
//into the variable on the left: 
//message = message + " Welcome to my site! ";
//is the same effect as this shorthand method:
message += "We are so glad you came by to visit, "
message += visitorName;
message += ". \nPlease come again when you want to learn more.";
document.write(message);

//??But why it is NOT using the \n to start on a new line????
//No answer yet. 