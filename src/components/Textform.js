import React, { useState } from 'react'

export default function Textform(props) {

    const handleonclick=()=>{
        if(text===text.toUpperCase()){
            let newtext=text.toLowerCase();
            setText(newtext);
        }
        else{
            let newtext=text.toUpperCase();
            setText(newtext);
        }
    }
    const clear=()=>{
        let newt='';
        setText(newt);

    }
    const onchange=(event)=>{
            setText(event.target.value);
    }
    const[text,setText]=useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={onchange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleonclick}>UpperCase/lowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={clear}>Clear</button>
            

        </div>
        <div className="conatiner my-3">
            <h2>Your text </h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
            </p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview'}</p>

        </div>
        </>
    )
}
