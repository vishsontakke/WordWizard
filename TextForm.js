import React,{useState} from 'react'

export default function TextForm(props) {
   
    const UpperCaseClick=()=>{
      //console.log("UpperCase clicked"+ text);
      let newtext=text.toUpperCase();
      setText(newtext);
    }
    const ClearText=()=>{
      //console.log("UpperCase clicked"+ text);
      let newtext="";
      setText(newtext);
    }
    const LowerCaseClick=()=>{
      //console.log("UpperCase clicked"+ text);
      let newtext=text.toLowerCase();
      setText(newtext);
    }
    const HandleOnChange=(event)=>{
      //console.log("Onchange clicked");
      setText(event.target.value);
    }
    
    const [text, setText] = useState("");
  return (
    <>
    <div className='container'>
       <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" onChange={HandleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={UpperCaseClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={LowerCaseClick}>Convert To LowerCase</button>
        <button className="btn btn-danger mx-1 my-1" onClick={ClearText}>Clear Text</button>
        
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words,{text.length} charecters</p>
      <h5>
        Need {text.split(" ").length*0.008} min Time to Read this.
      </h5>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
