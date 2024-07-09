import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleOnchange = (event) => {
        // console.log("something was written here ");
        setText(event.target.value);
    }
    const handleUPclick = () => {
        setText(text.toUpperCase());
        props.showAlert(" Converted to Uppercase", "success");
    }
    const handleLOclick = () => {
        setText(text.toLowerCase());
        props.showAlert(" Converted to Lowercase", "success");
    }
    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text has been copied", "success");
    }
    const handleClear = () => {
        setText("");
        props.showAlert(" Text has been cleared", "success");
    }
    const countwords = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra spaces removed", "success");
    }
    return (
        <div className='container' style={{color:props.mode === 'dark' ? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' value={text} onChange={handleOnchange} style={{backgroundColor:props.mode === 'dark' ? 'grey':'white', color:props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUPclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLOclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleClear} >Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={RemoveExtraSpaces} >Remove Extra Spaces</button>
            <div className="container my-3" onClick={countwords} style={{color:props.mode === 'dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
            </div>
        </div>
    )
}
