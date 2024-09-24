import { useState, useEffect } from 'react'
import './Styles/App.css'
import Pagination from "./Components/Pagination"
import Header from './Components/Header'
import SearchStation from './Components/SearchStation'
import TableStation from './Components/TableStation'
import { fetchData } from './Services/UserService'
// import { Router, Routes } from 'react-router-dom'
// import DeleteStation from './ComponentsPopup/DeleteStation'
import { Routes, Route, useParams } from "react-router-dom";
import MyComponent from './ComponentAll'
import Products from './ComponentPage/Products'
import Reports from './ComponentPage/Reports'
import Teams from './ComponentPage/teams'
import Message from './ComponentPage/Messsage'
import UserParams from './ComponentPage/useParams'
function App() {



  return (
    <Routes>
      <Route path="/" element={<MyComponent />} >
      </Route>
      <Route path='/params/:id' element={<UserParams />} />
      <Route path="/products" element={<Products />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/team" element={<Teams />} />
      <Route path='/message' element={<Message />} />
    </Routes>
  )
}

export default App
