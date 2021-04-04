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


                
   

    
