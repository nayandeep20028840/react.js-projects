import './App.css';
import React,{ useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // setTimeout(() => {
  //   document.title = 'TextUtils - Home';
  // }, 2000);
  // setTimeout(() => {
  //   document.title = 'TextUtils - Analyzing your text';
  // }, 1500);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert(" Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my 3'>
        <Routes>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
        </Routes>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;