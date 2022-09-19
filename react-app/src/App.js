import React, { useState, useEffect } from "react";
import files from "./book/templates/files";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import Checkbox from '@mui/material/Checkbox';

function App() {

  const [input, setInput] = useState("");
  const [fileName, setFileName] = useState("ex1.md");
  const [selectingFiles, setSelectingFiles] = useState(false);
  const [book, setBook] = useState([]);
  const [renderBook, setRenderBook] = useState(false);

  const file = files[fileName];
  // const chapter = files[];

  function handleTemplateChange(file) {
    setFileName(file);
  }

  function handleShowCheckBoxes() {
    if (selectingFiles) {setSelectingFiles(false)}
    else {setSelectingFiles(true)}
  }

  function handleBuildBook() {
    setRenderBook(true);
  }

  function handleChange(event) {
    const index = book.indexOf(event.target.value)
    if (index === -1) {
      setBook([...book, event.target.value])
    } else {
      setBook(book.filter((book) => book !== event.target.value))
    }
  }

  useEffect(() => {
    setInput(file.value);
  }, [fileName])
  useEffect(() => {
    console.log(book);
    console.log(file);
  }, [book])

  return (
    <div style={{display: "flex", width: "100%"}}>
      <div style={{display: "flex", flexDirection: "column", width: "20%"}}>
        {
          (selectingFiles && !renderBook) ? 
            <>
              {
                Object.values(files).map((template, index) => (
                  <div key={index}>
                    <button key={index} disabled={fileName === template.name} onClick={() => handleTemplateChange(template.name)}>{template.name}</button><Checkbox checked={book.includes(`${template.name}`)} onChange={handleChange} value={template.name} />
                  </div>
                ))
              }
                <button onClick={handleBuildBook}>Build Book</button>
            </>
          : (!selectingFiles && !renderBook) ?
            Object.values(files).map((template, index) => (
                <button key={index} disabled={fileName === template.name} onClick={() => handleTemplateChange(template.name)}>{template.name}</button>
            ))
          : 
            book.map((chapter, index) => (
              <button key={index} disabled={fileName === chapter.name} onClick={() => handleTemplateChange(chapter.name)}>{chapter.name}</button>
            ))
        }
        <button onClick={handleShowCheckBoxes}>Select Files</button>
      </div>
      <div style={{display: "flex", flexDirection: "column", width: "80%"}}>
        <ReactMarkdown children={input} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
}

export default App;
