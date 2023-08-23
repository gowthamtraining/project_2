import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import "./style.css"
const Table = (props) => {
  // console.log(props.data)
  function deletekey(e,index){
    e.stopPropagation()
    let data = [...props.data]
    let filtered = data.filter((item,indx)=>index !== indx)
    // console.log(data)
    props.setBook(filtered)
    // console.log(index)
  }
  function deletevalue(e,index){
    e.stopPropagation()
    let filtered = props.data.filter((item,indx)=>index != indx)
    props.setData(filtered)
  }
  return (
    // <div>
    //   <tr>
    //     <th>title</th>
    //     <th>url</th>
    //     <th>quantity</th>
    //     <th>gener</th>
    //   </tr>
    //   {props.data.map((item,index)=>{
    //   return(  
    //   <tr>
    //    <td>{item.title}</td>
    //    <td><a href='#'>{item.url}</a></td>
    //    <td>{item.quantity}</td>
    //    <td>{item.gener}</td>
    //    <button onClick={(e)=>deletekey(e,index)}>delete</button>
    //    <Link to = {`/view/${item.id}`}><button>view</button></Link>
    //  </tr>
    //   )
    // })}
    // </div>
    <div className='table'>
      <tr>
        <th>name</th>
        <th>language</th>
        <th>hobbies</th>
        <th>gender</th>
      </tr>
      {props.data.map((item,index)=>{
        return(
          <tr>
          <td>{item.name}</td>
          <td>{item.language}</td>
          <td>{item.gender}</td>
          <td>{item.hobbies.join(" ")}</td>
          <td><button onClick={(e)=>deletevalue(e,index)}>delete</button></td>
          <td><Link to ={`/view/${item.id}`}><button >view</button></Link></td>
          <td><Link to = {`/edit/${item.id}`}><button>edit</button></Link></td>
        </tr>
        )
        
      })}
    </div>
  )
}

export default Table
