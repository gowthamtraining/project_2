import React, { useState } from 'react'
import "./style.css"
const Data = (props) => {
  const [data,setData] = useState({language:"",name:"",hobbies:[],gender:""})
  function changelanguage(e){
      setData({...data,language:e.target.value})
  }
  function setNamevalue(e){
    setData({...data,name:e.target.value})
}
function setcheckboxvalue(e){
  let Data = [...data.hobbies]
  if(Data.includes(e.target.name)){
      Data = Data.filter((item)=>item !=e.target.name)
  }
  else{
      Data.push(e.target.name)
  }
  setData({...data,hobbies:Data})
}
    function submitdata(){
        props.setData([...props.data,{...data,id:new Date().getMilliseconds()}])
        setData({gender:"",name:"",hobbies:[],language:""})
    }
    function chnagegender(e){
      setData({...data,gender:e.target.name})
  }
  return (
    <div className='data'>
      <div className='dropdown'>
      <label htmlFor='language'>language</label>
      <select value={data.language} onChange={changelanguage} id='language'>
        <option value="hindi">hindi</option>
        <option value="telugu">telugu</option>
        <option value="english">english</option>
      </select>
      </div>
      <div className='name'>
      <label>name</label>
      <input type="text" name="" id="" value={data.name} onChange={setNamevalue}/>
      </div>
      <div className='hobbies'>
      <label>football</label>
      <input type="checkbox" name="football" id="" checked = {data.hobbies.includes("football")} onChange={setcheckboxvalue}/>
      <label>cricket</label>
      <input type="checkbox" name="cricket" id="" checked = {data.hobbies.includes("cricket")} onChange={setcheckboxvalue}/>
      </div>
      <div className='gender'>
      <label>female</label>
      <input type="radio" name="female" id="" checked= {data.gender === "female"} onChange={chnagegender}/>
      <label>male</label>
      <input type="radio" name="male" id="" checked = {data.gender === "male"} onChange={chnagegender}/>
      </div>
      <button onClick={submitdata}>submit</button>
    </div>
  )
}

export default Data
