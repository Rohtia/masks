var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var char = document.getElementById("charForm");
var text = "";
var i;
const character = [" "];
var charName;
var charPlaybook;
var field = ["charName", "charPlaybook"];

("p").click(runForm());
function playbooks(text) {
	console.log(text);
	if (text == "nova") {
  	return "The Nova";
  } else if (text == "transformed") {
  	return "The Transformed"
  } else {
  	console.log("error");
  }
 // console.log(text);
}

function runForm() {

  for (i = 0; i < char.length; i++) {
  	text = char.elements[i].value;
    console.log("Got value number " + i);

    if (i == 1) {
      text = playbooks(text);
    }

  	character[i] = text;
    console.log("Printing character " + i + character[i]);

    document.getElementById(field[i]).innerHTML = character[i];
  }
  //document.getElementById("demo").innerHTML = text;

}
console.log(character);
document.getElementById("charInfo").innerHTML = character[0];
