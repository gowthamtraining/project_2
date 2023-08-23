import React, { useState } from 'react'

const Dropdown = () => {
    const[selectValue,setSelectvalue] = useState("")
    const [formData,setFormdata] = useState({fullName:"",language:"",hobbies:["football"],gender:"male"})
    const[text,setText] = useState("")
    const [value,setValue] = useState("")
    function handledropdownchange(e){
        setSelectvalue(e.target.value)
        if(formData.language === e.target.value){
          setFormdata({...formData,language:""})
        }
        else{
          setFormdata({...formData,language:e.target.value})
        }
    }
    function handleCheckbpx(e){
      console.log(e.target.name)
      let array = [...formData.hobbies]
      if(formData.hobbies.includes(e.target.name)){
        array = array.filter((item)=>item!==e.target.name)
      }
      else{
        array.push(e.target.name)
      }
      setFormdata({...formData,hobbies:array})
    }
    function handleRadio(e){
      if(formData.gender === e.target.name){
        setFormdata({...formData,gender :""})
      }
      else{
        setFormdata({...formData,gender:e.target.name})
      }
    }
    function handletext(e){
      setText(e.target.value)
    }
    function handlesubmit(e){
        if(selectValue === ""){
           alert("kindly select") 
        }
        if(text === ""){
          setValue("kindly select text box")
        }
        else{
          console.log(selectValue)
        }
    }
    console.log(formData)
    function printfullname(e){
      if(e.key === "Enter"){
        setFormdata({...formData,fullName:text})
        setText("")
      }
    }
  return (
    <div>
    <button onClick={handlesubmit}>submit</button>
      <select value={selectValue} onChange={handledropdownchange} >
        <option value="hindi">hindi</option>
        <option value="english" >english</option>
        <option value="tamil">tamil</option>
        <option value="telugu">telugu</option>
      </select>
      <label id='fullName'>fullName:</label>
      <input type="text" name="fullName" id="" value={text} onChange={handletext} onKeyDown={printfullname}/>
      <label htmlFor="football">football</label>
      <input type='checkbox' checked={formData.hobbies.includes("football")} onChange={handleCheckbpx} name='football'></input>
      <label htmlFor="handball">handball</label>
      <input type='checkbox' checked={formData.hobbies.includes("handball")} onChange={handleCheckbpx} name='handball'></input>
      <label htmlFor="male">male:</label>
      <input type="radio" checked={formData.gender === "male"} onChange={handleRadio} name='male'/>
      <label htmlFor="female">female</label>
      <input type="radio" checked = {formData.gender === "female"}  onChange={handleRadio} name='female'/>
      <p>{value}</p>
    </div>
  )
}
export default Dropdown
