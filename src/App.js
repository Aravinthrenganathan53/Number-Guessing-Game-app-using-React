import './App.css'
import { useState } from 'react';
import Secret from './Guess';

const SecretNum = Math.floor(Math.random() * 10 + 1)
function Guessing() {


  const [input, setInput] = useState('')

  function handleinput(e) {
    setInput(e.target.value)
    console.log(input)
  }

  return (
    <>
      <div id="fullbox">

        <h1 id="heading">Guessing app</h1>
        <div id="box">
          <h2>Guess the Number between 1 to 10 </h2>
          <input type="text" className='input' value={input} onChange={handleinput} />
          <Secret SecretNum={SecretNum} input={input} />
        </div>

      </div>
    </>
  )

}




export default Guessing;