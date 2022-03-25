import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
      title:"",
      content:"",
  });

  function handleChange(event) {
    const { name, value } = event.target; //keyboard
    setNote(prevNote=>{
        return{
            ...prevNote,
            [name] :value
        }
    });
  }

  function submitNote(event){  //button handleClick
      props.onAdd(note);
      setNote({
          title:"",
          content:""
      });
    //   event.preventDeafault();
  }


    return (
      <div>
        <form>
          
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={note.title}
          />

          <textarea placeholder="Create new note" 
            name="content"
            type="text"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
          />
          <button type="button" onClick={submitNote}>Add</button>
        </form>
      </div>
    );
  }
export default CreateArea;
