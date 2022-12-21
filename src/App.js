/* eslint no-eval: 0 */
import React from 'react'

const App = () => {
const [val, setVal]= React.useState("")
 //const [clear, setClear]= React.useState("")
const[result, setResult] = React.useState("") 
function handleClick(e){
   setVal(val + e.target.value)

}
function reset(){
  setVal("")
  // setResult(setVal(val => 0))
}
const calculate = () =>{
  setResult(eval(result + val))
}
  return (
    <div className='bg-[#c2c2d6] h-screen flex justify-center items-center'>
      <div className=' bg-black w-[320px] h-[408px] p-2'>
        <div className=''>
          
        <h3 className='text-white w-full h-[25px] mt-2 text-right pr-2 text-base'>{val} </h3>
          <h1 className='text-white w-full h-[35px] bg-black text-right pr-2 text-base'>{result}</h1>
        </div>
        <div className='grid grid-cols-4'>
          <h3 onClick={reset} className='text-white cursor-pointer bg-red col-span-2 h-[65px]  text-center flex justify-center items-center border border-black'>AC</h3>
          <button value="/" onClick={handleClick} className='text-white bg-light-gray border border-black'>/</button >
          <button value="X" onClick={handleClick} className='h-[65px] bg-light-gray border border-slate-700'>X</button>
          <button value={7} onClick= {(e) => setVal(val + e.target.value)} className='h-[65px] bg-[#4d4d4d] border border-black'>7</button>
          <button value={8} onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>8</button>
          <button value={9} onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>9</button>
          <button value="-" onClick={handleClick} className='h-[65px] bg-light-gray border border-black'>-</button>
          <button value={4} onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>4</button>
          <button value={5} onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black '>5</button>
          <button value={6} onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>6</button>
          <button value="+" onClick={handleClick} className='h-[65px] bg-light-gray border border-black'>+</button>
          <button value={1} onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>1</button>
          <button value={2} onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>2</button>
          <button value={3} onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>3</button>
          <button onClick={calculate} className='grid-flow-row bg-blue'>=</button>
          <button value={0} onClick={handleClick} className='h-[65px] col-span-2 bg-[#4d4d4d] border border-black'>0</button>
          <button value= "." onClick={handleClick} className='h-[65px] bg-[#4d4d4d] border border-black'>.</button>
          <button onClick={calculate} className='h-[65px] bg-blue'></button>
        </div>
      </div>
    </div>
  )
}
 
export default App