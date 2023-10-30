import React from "react";

const NotesDiv = () => {
  return (
    <div style={{ width: "100%", height: "90%" }}>
      <input
        type="textarea"
        rows={7}
        cols={40}
        style={{
          //   backgroundColor: "#f1c75b",
          border: "none",
          textAlign: "justify",
          wrap: "hard",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default NotesDiv;
