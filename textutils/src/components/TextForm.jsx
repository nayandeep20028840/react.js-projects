import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleOnchange = (event) => {
        console.log("something was written here ");
        setText(event.target.value);
    }
    const handleUPclick = () => {
        console.log("uppercase was clicked");
        setText(text.toUpperCase());
    }
    const handleLOclick = () => {
        console.log("lowercase was clicked");
        setText(text.toLowerCase());
    }
    const handleCopy = () => {
        console.log("copy was clicked");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUPclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLOclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            <div className="container my-3" onClick={handleExtraSpaces}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
            </div>
        </div>
    )
}
