/* eslint no-eval: 0 */
import React from 'react'
import { findAllInRenderedTree } from 'react-dom/test-utils'
//import { useRef } from 'react';

const App = () => {
  let [val, setVal] = React.useState("")
  const [result, setResult] = React.useState(0)
  //const [operator, setOperator] = React.useState("")

  //console.log(val)
  // const decimalPoint = "."
  // const zero = "0"
  // const sliceDown = val.slice(0, -1)
  // const operators = /(\+|\-|\/|-)/
  // else if (val === zero) {
  //   setVal("")
  // }
  // else if (val.match(/^\+|^\-|^\*|^\//)) {
  //   setVal(val.slice(0, -1))
  // }
  // else if (val.match(/(\+)$/)) {
  //   setVal(val.slice(0, 1))
  // }
  // else if (val.match(/(\.)$/)) {
  //   setVal(val.slice(0, -1))
  // 

  function handleClick(e) {

    //   function getLastOperand(val){
    //let operator = (val.match(/\+|\-|\/|\*/g))
    //     if(operator){
    //    let lastOperand= val.lastIndexOf(operator.pop());
    //     return val.slice(lastOperand + 1);
    //     }else{
    //         return "";
    //     }
    // }

    const char = e.target.value
    let newVal = val?.concat(char);
    //  console.log(lastOperator)
    //console.log(...arr)

    // To prevent leading zeroes for all operands
    if (char === "0") {
      if (val === "0") {
        newVal = val
      }
    }
    if (val === "0") {
      if (char !== "0") {
        newVal = char;
      }
      if (char === "." || char.match(/\+|\-|\/|\*/g)) {
        newVal = val + char;
      }
    }
    let operator = (val.match(/\+|\-|\/|\*/g))
    if (operator) {
      let lastOperatorIndex = val.lastIndexOf(operator.pop());
      let lastOperand = val.slice(lastOperatorIndex + 1);
      if (lastOperand === "0" || char.match(/\+|\-|\/|\*|\./g)) {
        newVal = val + char;
      }
      if (lastOperand === "0" && char === "0") {
        newVal = val
      }
      if (lastOperand === "0" && char.match(/[1-9]/)) {
        let a = val.replace(lastOperand, char)
        newVal = a;
      }
    }
    // To prevent leading decimal points in all operands
    if (!val && char === ".") {
      newVal = val
    }
    // prevent 5..5
    let decimal = (val.match(/\./g))
    if (decimal && !operator) {
      if (char === ".") {
        newVal = val;
      }
    }

    if (operator) {
      let lastOperatorIndex = val.lastIndexOf(operator.pop());
      let lastOperand = val.slice(lastOperatorIndex + 1);
      if (val[val.length - 1] === "." && char === ".") {
        newVal = val;
      }
    }
    // To prevent leading operators in all operands
    //   function getLastOperand(val){
    //     let operator = (val.match(/\+|\-|\/|\*/g))
    //     if (operator) {
    //       let firstOperand = val.indexOf(operator.shift())
    //       let lastOperand = val.lastIndexOf(operator.pop());
    //       let a = val.charAt(firstOperand)
    //       let z = val.charAt(lastOperand)
    //       let b = val.replace(a, z);
    //       return b.slice(0, -1)
    //     }
    // }

    if (val === "" && char.match(/\+|\-|\/|\*/g)) {
      newVal = ""
    }

    function getLastOperator(val) {
      let operator = (val.match(/\+|\-|\/|\*/g))
      if (operator) {
        let firstOperator = val.indexOf(operator.shift())
        let lastOperator = val.lastIndexOf(operator.pop());
        let a = val.charAt(firstOperator)
        let z = val.charAt(lastOperator)
        let b = val.replace(a, z);
        newVal = b.slice(0, -1)
        return newVal
      }

    }
    if (operator) {
      console.log(getLastOperator(val), val)
    } 

    // if (operator) {
    //     let convert = operator.toString()
    //     let firstOp = convert.slice(0,1)
    //     let lastOp = convert.slice(-1)
    //   let b = val.replace(firstOp, lastOp);

    //   newVal = b.slice(0, 1 ) + char
    // } 

    setVal(newVal)
    setResult(newVal)
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