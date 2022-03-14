import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Notes from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map((notesTerm) => (
        <Notes
          key={notesTerm.key}
          name={notesTerm.key}
          content={notesTerm.content}
        />
      ))}
    </div>
  );
}

export default App;
