import React, { useState } from 'react'

const Dropdown = () => {
    const[selectValue,setSelectvalue] = useState("")
    const[text,setText] = useState("")
    const [value,setValue] = useState("")
    const [clicked,setClicked] = useState(false)
    const [radio,setRadio]= useState(false)
    function handledropdownchange(e){
        setSelectvalue(e.target.value)
    }
    function handleCheckbpx(){
      setClicked(!clicked)
    }
    function handleRadio(){
      setRadio(!radio)
    }
    function handletext(e){
      setText(e.target.value)
    }
    function handlesubmit(){
        if(selectValue === ""){
           alert("kindly select") 
        }
        if(clicked === false || radio === false){
          alert("kindly clicked the ckecbox or radio buttons")
        }
        if(text === ""){
          setValue("kindly select text box")
        }
        else{
          console.log(selectValue)
        }
    }
    console.log(clicked)
    console.log(radio)
    console.log(text)
  return (
    <div>
    <button onClick={handlesubmit}>submit</button>
      <select value={selectValue} onChange={handledropdownchange} >
        <option value="heloo">heloo</option>
        <option value="home" >home</option>
        <option value="service">service</option>
        <option value="footer">footer</option>
        <option value="blog">blog</option>
        <option value="about">about</option>
      </select>
      <input type="text" name="" id="" value={text} onChange={handletext}/>
      <input type='checkbox' checked={clicked} onChange={handleCheckbpx}></input>
      <input type="radio" checked={radio} onChange={handleRadio}/>
      <p>{value}</p>
    </div>
  )
}

export default Dropdown
