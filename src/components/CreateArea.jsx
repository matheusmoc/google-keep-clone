import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isMousedOver, setMouseOver] = useState(false); //enter in page

  function handleChange(event) {
    const { name, value } = event.target; //keyboard
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    //button handleClick
    props.onAdd(note);  
    setNote({              //after sbmit the text area is empty
      title: "",
      content: "",
    });
    //   event.preventDeafault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div>
      <form
        style={{ opacity: isMousedOver ? !isMousedOver : 0.5}}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
      >
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          type="text"
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          value={note.content}
        />
        <button type="button" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}
export default CreateArea;
