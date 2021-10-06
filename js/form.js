const form = document.getElementById("infoForm");
form.addEventListener('submit', (event) => {
	//handle form data
  event.preventDefault(); //if something required is invalid, prevents sending the form.
});

/* function charPage() {
  var name = getElementByID
} */
class Char {
constructor(name, playbook, danger, freak, savior, superior, mundane) {
  this.name = name;
  this.playbook = playbook;
  this.danger = danger;
  this.freak = freak;
  this.savior = savior;
  this.superior = superior;
  this.mundane = mundane;
  this.exp = 0;
  }
}
const chForm = document.getElementById("infoForm");
//form.submit();
var na = chForm.element('name');
var pl = chForm.element('playbook');
var da = chForm.element('danger');
var fr = chForm.element('freak');
var sa = chForm.element('savior');
var su = chForm.element('superior');
var mu = chForm.element('mundane');

let name = na.value;
let playbook = pl.value;
let danger = da.value;
let freak = fr.value;
let savior = sa.value;
let superior = su.value;
let mundane = mu.value;

var yourChar = new Char (name, playbook, danger, freak, savior, superior, mundane);
console.log(yourChar);
