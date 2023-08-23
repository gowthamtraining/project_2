import React, { useState } from 'react'

const Book = (props) => {
  const [titles,SetTittle] =useState("")
  const [url,seturl] = useState("")
  const [number,setnumber] = useState()
  const [gener,setgener] = useState("")
  function titlechange(e){
    SetTittle(e.target.value)
  }
  function seturlvalue(e){
    seturl(e.target.value)
  }
  function submitbook(){
    props.setBook([...props.Book,{id:new Date().getUTCMilliseconds(),title:titles,url:url,quantity:number,gener:gener}])
    setgener("")
    setnumber("")
    seturl("")
    SetTittle("")
    if(titles==="" || number===""||url===""||gener===""){
      alert("kindly check it")
    }
  }
  function setquantity(e){
    setnumber(e.target.value)
  }
  function genervalue(e){
    setgener(e.target.value)
  }
  return (
    <div>
      <label>title</label>
      <input type="text" name="" id="" value={titles} onChange={titlechange}/>
      <label>url</label>
      <input type="url" name="" id="" value={url} onChange={seturlvalue} />
      <label htmlFor="">quantity</label>
      <input type="number" name="" id="" value={number} onChange={setquantity}/>
      <label htmlFor="">gener</label>
      <input type="text" name="" id="" value={gener} onChange={genervalue} />
      <button onClick={submitbook}>submit</button>
    </div>
  )
}

export default Book
