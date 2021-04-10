const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const THEME = 'mode';
const notesarray = [];

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

function createContentWritingArea()  {
const div = document.querySelector('#content')
div.insertAdjacentHTML('beforeend')
setCursor()
}

function setCursor()  {
const div = document.querySelector('#note-area')
div.focus()
}



















// * function to delete notes * //
// • function deleteNote(index)  {     
// •	 let confirmDel = confirm(“You are deleting this note!!”);
// •	       
// •	    If (confirmDel == true)  {
// •	           Let notes = localStorage.getitem(“notes”);
// •	           If (notes == null)  {
// •	                notesObj = [];
// •	       }  else  {
// •	              notesObj = JSON.parse(notes);
// •	       }
// •	  
// •	       notesObj.splice(index, 1);
// •	       localStorage.setItem(“notes”,  JSON.stringify(notesObj));
// •	       showNotes()
// •    })


// * function to add new note * //
// •	function addNote(e){
// •	     e.preventDefault();
// •	
// •	     let newNote = {};
// •	       
// •	     let title = document.querySelector(‘.title’);
// •	     let note = document.querySelector(‘.note’);
// •	        
// •	     if(title.value == ‘ ‘ || note.value == ‘ ‘ ){
// •	            Return alert(‘Please enter both fields.’);
// •	      }else{
// •	            newNote.title = title.value;
// •	            newNote.note = note.value;
// •	      }
// •	         
// •	      title.value = ‘ ’;
// •	      note.value = ‘ ‘;
// •	        
// •	      noteList.push(newNote);
// •	      appendNotes();
// •	      cancel.click();
// •	        
// •	}


// * function to store notes in an Array * //
//  •	function appendNotes(){
//  •	       
//  •	let notes = Array.from(document.querySelectorAll(.’noteItem’));
//  •	if(notes.length > 0){
//  •	    notes.forEach(note =>{
//  •	        note.remove();
//  •	    })
//  •	 }    


                
   

    
