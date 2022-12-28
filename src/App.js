/* eslint no-eval: 0 */
import React from 'react'
import { useRef } from 'react';

const App = () => {
  //let [decimal, setDecimal] = React.useState(".")
  let [val, setVal] = React.useState("")
  const [result, setResult] = React.useState(0)
  //console.log(val)
  function handleClick(e) {
    setVal(val?.concat(e.target.value))
    setResult(val?.concat(e.target.value))
    // if (val.includes (".")) {
    //     e.currentTarget.disabled = true;
    // } 
  }
  
 
  function reset() {
    setVal("")
    setResult(0)
   
  }
  const calculate = () => {
    // setVal(val + " = " + (eval(val).toString()))
      setVal(eval(val).toString())
     setResult(eval(val).toString())

  }


  const remove = () => {
    setVal(val.slice(0, -1))
    setResult(val.slice(0, -1))
  }
  return (
    <div className='bg-[#c2c2d6] h-screen flex justify-center items-center'>
      <div className=' bg-black w-[320px] h-[408px] p-2'>
        <div className=''>

          <h3 className='text-white w-full h-[25px] mt-2 text-right pr-2 text-base'>{val} </h3>
          <h1 id="display" className='text-white w-full h-[35px] bg-black text-right pr-2 text-base'>{result}</h1>
        </div>
        <div className='grid grid-cols-4'>
          <h3 onClick={reset} id="clear" className='text-white cursor-pointer bg-red col-span-2 h-[65px]  text-center flex justify-center items-center border border-black'>AC</h3>
          <button value="/" id="divide" onClick={handleClick} className='text-white bg-light-gray border border-black'>/</button >
          <button value="*" id="multiply" onClick={handleClick} className='h-[65px] bg-light-gray border border-slate-700'>X</button>
          <button value={7} id="seven" onClick={(e) => setVal(val + e.target.value)} className='h-[65px] bg-[#4d4d4d] border border-black'>7</button>
          <button value={8} id="eight" onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>8</button>
          <button value={9} id="nine" onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>9</button>
          <button value="-" id='subtract' onClick={handleClick} className='h-[65px] bg-light-gray border border-black'>-</button>
          <button value={4} id="four" onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>4</button>
          <button value={5} id="five" onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black '>5</button>
          <button value={6} id="six" onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>6</button>
          <button value="+" id="add" onClick={handleClick} className='h-[65px] bg-light-gray border border-black'>+</button>
          <button value={1} id="one" onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>1</button>
          <button value={2} id="two" onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>2</button>
          <button value={3} id="three" onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>3</button>
          <button id='equals' onClick={calculate} className='h-65 border border-black bg-blue'>=</button>
          <button value={0} id="zero" onClick={handleClick} className='h-[65px] col-span-2 bg-[#4d4d4d] border border-black'>0</button>
          <button value="." id="decimal" onClick={handleClick} className='h-[65px] bg-[#4d4d4d] text-lg border border-black'>.</button>
          <button onClick={remove} className='h-[65px] bg-blue border border-black'>del</button>
        </div>
      </div>
    </div>
  )
}
export default App