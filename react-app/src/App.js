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

  // useEffect(() => {
  //   setInput(file.value);
  // }, [fileName])
  // useEffect(() => {
  //   console.log(book);
  //   console.log(file);
  // }, [book])


  const [selectingMainChapter, setSelectingMainChapter] = useState(false);
  const [selectingSubChapter, setSelectingSubChapter] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [render, setRender] = useState([]);

  function handleSelectingNextMain() {
    if (selectingSubChapter) {setSelectingSubChapter(!selectingSubChapter)}
    setSelectingMainChapter(!selectingMainChapter);
  }
  function handleSelectingNextSub() {
    if (selectingMainChapter) {setSelectingMainChapter(!selectingMainChapter)}
    setSelectingSubChapter(!selectingSubChapter);
  }
  function handleAddFile(file) {
    if (selectingMainChapter) {
      file.chapter = "main";
      chapters.push(file);
      console.log("pushed main");
    }
    if (selectingSubChapter) {
      file.chapter = "sub";
      chapters.push(file);
      console.log("pushed sub");
    }
    setRender(!render);
  }

  return (
    <div style={{display: "flex", width: "100%"}}>
      <div style={{display: "flex", flexDirection: "column", width: "20%"}}>
        {
          (selectingFiles && !renderBook) ? 
            <>
              {/* {
                Object.values(files).map((template, index) => (
                  <div key={index}>
                    <button key={index} disabled={fileName === template.name} onClick={() => handleTemplateChange(template.name)}>{template.name}</button><Checkbox checked={book.includes(`${template.name}`)} onChange={handleChange} value={template.name} />
                  </div>
                ))
              } */}
              {
                Object.values(files).map((file, index) => (
                  <div key={index}>
                    <button key={index} disabled={fileName === file.name} onClick={() => handleAddFile(file)}>{file.name}</button>
                  </div>
                ))
              }
                <button onClick={handleBuildBook}>Build Book</button>
                <div style={{display: "flex", flexDirection: "column", border: "3px solid black"}}>
                  {
                    chapters.map((chapter, index) => (
                      chapter.chapter === "main" ?
                        <>
                          <p key={"label" + index} >Main: </p>
                          <div key={index} style={{width: "100%", backgroundColor: "blue"}}>
                            {chapter.name}
                          </div>
                        </>
                      :
                        <>
                          <p key={"label" + index} >Sub: </p>
                          <div key={index} style={{width: "100%", backgroundColor: "blue"}}>
                            {chapter.name}
                          </div>
                        </>
                    ))
                  }
                  <div style={{width: "100%"}}>
                    <button onClick={handleSelectingNextMain} disabled={selectingMainChapter === true}>Next chapter</button>
                    <button onClick={handleSelectingNextSub} disabled={selectingSubChapter === true}>Next subchapter</button>
                  </div>
                </div>
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
