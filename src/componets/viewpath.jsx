import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Viewpath = (props) => {
    const params = useParams()
    const {bookId} = params
    let id = Number(bookId)
    const a = props.data.filter((item)=>item.id === id)
  return (
    //   console.log(props.data.filter((item)=>item.id === abc))
    // console.log(props.data)
    
    <>
    {/* <tr>
        <th>title</th>
        <th>url</th>
        <th>quantity</th>
        <th>gener</th>
    </tr>
    {a.map((item)=>{
        return(
    <tr>
        <td>{item.title}</td>
        <td><a href="#">{item.url}</a></td>
        <td>{item.quantity}</td>
        <td>{item.gener}</td>
    </tr>
        )
    })}
     */}
    <tr>
        <th>name</th>
        <th>language</th>
        <th>gender</th>
        <th>hobbies</th>
    </tr>
    {a.map((item)=>{
        return(
            <tr>
                <th>{item.name}</th>
                <th>{item.language}</th>
                <th>{item.gender}</th>
                <th>{item.hobbies.join(" ")}</th>
            </tr>
        )
    })}
    </>
    
  )
}

export default Viewpath
