import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("UppperCase was Clicked"+text);
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to UpperCase","success");
  }
  const handleLowClick=()=>{
    console.log("LowerCase was Clicked"+text);
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to LowerrCase","success");
  }
  const handleClearClick=()=>{
    console.log("ClearText was Clicked");
    let newtext="";
    setText(newtext)
    props.showAlert("Text Cleared","success");
  }
  const handleonChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter Text Here');
  //text = "new Text" //Wrong way to change the state
 // setText("new Text"); //correct way to change the state
  return (
    <>
     <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white',
      color: props.mode==='dark'? 'white':'black'}} id="myBox" rows="9"> </textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter Something to preview it"}</p>
    </div>
    </>
    
  );
}
