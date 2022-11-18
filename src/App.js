

import {useState} from 'react'
import './App.css';

function App() {


    const[result,setResult]=useState("")

 
    const editbutton= (e) => {


    setResult(result.concat (e.target.name));   
    console.log(e.target.name);

    }
  
    const clear = () => {
     setResult ("")
  
    }


   const  backspace = () => {

   setResult (result.slice(0,result.length-1))

    }


    const calculate = () => {

      setResult( eval(result))

      }


  return (
    <div className="App">
     
    <div className='calculator'>
      
      <div className= "textfield" >
        
        <input value={result} onchange={(e) => setResult (result)} className="inputfield" type="text"></input>
        
      </div>

      <div className="button">
      
      <button id= "clear" onClick={clear} className='specialbtn'>Clear</button>
      <button  id= "backspace" onClick={backspace} className='specialbtn'>C</button>
      <button name="/"  onClick={editbutton} className='specialbtn'> &divide;</button>
      <button name="7" onClick={editbutton} className='button1'>7</button>
      <button name="8" onClick={editbutton} className='button1'>8</button>
      <button name="9" onClick={editbutton} className='button1'>9</button>
       
      <button name="*" onClick={editbutton} className='specialbtn'>&times;</button>
      <button name="4" onClick={editbutton} className='button1'>4</button>
      <button name="5" onClick={editbutton} className='button1'>5</button>
      <button name="6" onClick={editbutton} className='button1'>6</button>
     
      <button name="+" onClick={editbutton} className='specialbtn'>+</button>
      <button name="1" onClick={editbutton} className='button1'>1</button>
      <button name="2" onClick={editbutton} className='button1'>2</button>
      <button name="3" onClick={editbutton} className='button1'>3</button>
     
      <button name="-" onClick={editbutton} className='specialbtn'>-</button>
      <button name="0" onClick={editbutton} className='button1'>0</button>
      <button name="." onClick={editbutton} className='button1'>.</button>
      
      <button name="=" onClick={calculate} className='specialbtn'>=</button>
       
      </div>



    </div>
      



    </div>
  );
}

export default App;
