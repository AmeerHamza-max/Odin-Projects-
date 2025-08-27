// selects the #container div (don't worry about the syntax, we'll get there)
const container = document.querySelector("#container");

// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);  // <div class="display"></div>
// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
const display1 = controls.previousElementSibling;
console.log(display1); // <div class="display"></div>

const div = document.createElement("div");


// adds the indicated style rule to the element in the div variable
div.style.color = "blue";

// adds several style rules
div.style.cssText = "color: blue; background: white;";

// adds several style rules
div.setAttribute("style", "color: blue; background: white;");


// dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
// equivalent to: div.style.background - color
// div.style.background-color;

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];

// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");


// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";

// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";

// your JavaScript file
const container1 = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container1.appendChild(content);


let p=document.createElement('p');
p.textContent="Hey I'm red";
p.style.color='red';
document.body.appendChild(p);


let h3=document.createElement('h3');
h3.style.color='blue';
h3.textContent='Hey I am blue h3';
document.body.appendChild(h3);


let newDiv=document.createElement('div');
let h1=document.createElement('h1');
let p1=document.createElement('p');
newDiv.style.cssText="border:2px solid black;background-color:pink;";
h1.textContent="I'm in a div";
p1.textContent="Me Too";
document.body.appendChild(newDiv);
newDiv.appendChild(h1);
newDiv.appendChild(p);