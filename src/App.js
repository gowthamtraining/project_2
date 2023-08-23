import logo from './logo.svg';
import './App.css';
import Dropdown from './componets/Dropdown';
import React,{useState} from 'react';
import Viewpath from './componets/viewpath';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Table from './componets/Table'
import Book from './componets/Book';
import Data from './componets/Data';
import Edit from './componets/Edit';
function App() {
  const [data,setData] = useState([])
  // const [Books,setBook]= useState([])
  // console.log(Books)
  // return (
  //   <Router>
  // {/* // <Dropdown></Dropdown> */}
  //   <Link to="/add">add</Link>
  //   <Link to ="/list">list</Link>
  //   <Routes>
  //     <Route path = "/add" element = {<Book Book = {Books} setBook = {setBook}></Book>}></Route>
  //     <Route path = "/list" element = {<Table data = {Books} setBook = {setBook}></Table>}></Route>
  //     <Route path = "/view/:abc" element = {<Viewpath data = {Books}></Viewpath>}></Route>
  //   </Routes>
  //   </Router>
  // );
  console.log(data)
  return(
    <Router>
      <div className='navbar'>
      <Link to = "/data">add</Link>
      <Link to ="/list">list</Link>
      </div>
      
      <Routes>
          <Route path="/data" element = {<Data data = {data} setData = {setData}></Data>}></Route>
          <Route path='/list' element = {<Table data = {data} setData = {setData}></Table>}></Route>
          <Route path='/view/:bookId' element = {<Viewpath data = {data}></Viewpath>}></Route>
          <Route path='/edit/:id' element = {<Edit data = {data} setData = {setData} ></Edit>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
