import React, { useEffect ,useState} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
  } from 'react-router-dom';
import "./style.css"
const Edit = (props) => {
    const params = useParams()
    const {id} = params
    let editid = Number(id)
    const [data,setData] = useState({language:"",name:"",hobbies:[],gender:""})
    let indexValue=0
    props.data.map((item,index)=>{
      if(item.id === editid){
        indexValue+=index
      }
    })
    function changelanguage(e){
        setData({...data,language:e.target.value})
    }
    console.log(data)
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
        setData({gender:"",name:"",hobbies:[],language:""})
        props.data[indexValue] = data
    }
    function chnagegender(e){
        setData({...data,gender:e.target.name})
    }
    useEffect(()=>{
        let editData = props.data.filter((item,index)=>item.id === editid)
        setData({name:editData[0].name,hobbies:editData[0].hobbies,language:editData[0].language,gender:editData[0].gender})
    },[])
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
      <div className="name">
      <label>name</label>
      <input type="text" name="" id="" value={data.name} onChange={setNamevalue}/>
      </div>
      <div className="hobbies">
      <label>football</label>
      <input type="checkbox" name="football" id="" checked = {data.hobbies.includes("football")} onChange={setcheckboxvalue}/>
      <label>cricket</label>
      <input type="checkbox" name="cricket" id="" checked = {data.hobbies.includes("cricket")} onChange={setcheckboxvalue}/>
      </div>
      <div className="gender">
      <label>female</label>
      <input type="radio" name="female" id="" checked= {data.gender === "female"} onChange={chnagegender}/>
      <label>male</label>
      <input type="radio" name="male" id="" checked = {data.gender === "male"} onChange={chnagegender}/>
      </div>
      <button onClick={submitdata}>submit</button>
    </div>
  )
}

export default Edit
