import React from "react";

function Notes(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <p>{props.id}</p>
      <h4>{props.title}</h4>
      <hr />
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Notes;
