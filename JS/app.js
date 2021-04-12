const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const THEME = 'mode';
const notesArray = []

// functions to change light mode into dark mode and vise versa //
// Clicking moon logo changes theme to dark; clicking sun logo changes theme back to light//
document.addEventListener(
  'DOMContentLoaded', (event) => {
    applyTheme();
    const toggleSwitch = document.getElementById('toggle-switch');
    toggleSwitch.onclick = function() {
      let currentMode = localStorage.getItem(THEME);
      localStorage.setItem(
        THEME, 
        currentMode === DARK_MODE ? LIGHT_MODE : DARK_MODE
      );
      applyTheme();
    }
  }
);

function applyTheme() {
  let html = document.documentElement;
  let currentMode = localStorage.getItem(THEME);
  if (currentMode === DARK_MODE) {
    html.classList.add(DARK_MODE);
    document.getElementById('toggle-switch').innerHTML = 
      '<i class="fas fa-sun"></i>';
  } 
  else {
    html.classList.remove(DARK_MODE);
    document.getElementById('toggle-switch').innerHTML = 
      '<i class="fas fa-moon"></i>';
  }
}

function defineNoteWritingSection()  {
html = `
<div id = "textarea">
  <div id = "text" contenteditable="true"></div>
  <button onclick = "saveNote()">save</button>
  <button onclick = "cleanUp()">cancel</button>
</div>
`
return html 
}

// function to add new note //
function createContentWritingArea()  {
const div = document.querySelector('#content')
div.insertAdjacentHTML('beforeend', defineNoteWritingSection())
setCursor()
}

function setCursor()  {
const div = document.querySelector('#text')
div.focus()
}

// function to save note and store notes on an Array //
function saveNote()  {
const div = document.querySelector('#text')
const title = div.firstChild.textContent
const body = convertDivstoString()
notesArray.push(createNote(title, body))
console.log(notesArray)
cleanUp()
}

function createNote(title, body)  {
return { title,body }
}

function convertDivstoString()  {
let str = "";
const divs = [...document.querySelectorAll('[contenteditable] > div:not(:first-child)')];
 for (const i of divs) {
 str += `${i.textContent}\n`
 }
 return str
 }

// function to delete note //
function cleanUp()  {
 const div = document.querySelector('#textarea')
 div.remove()
 }


































 


                
   

    
