

/*****************/
/* HAMBURGER MENU */
/*****************/


/* OPEN MENU */

var menubutton = document.querySelector("button");
var menu = document.querySelector("nav");
menubutton.onclick = openMenu;
function openMenu() {
menu.classList.add("toonMenu");
  console.log("hij werkt");
}

/* SLUIT MENU */

var menusluitbutton = document.querySelector("nav button");
menusluitbutton.onclick = sluitMenu;
function sluitMenu() {
  var menu = document.querySelector("nav");
  menu.classList.remove("toonMenu");
  console.log("hij werkt");
}
