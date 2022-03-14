import React from "react";




function Notes(props) {
  return (
    <div className="note">
   
      <p>{props.key}</p>
      <h4>{props.name}</h4>
      <hr />
      <p>{props.content}</p>
    </div>
  );
}

export default Notes;
