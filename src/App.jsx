import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

import Pagination from './Components/Pagination'
import Header from './Components/Header'
import SearchStation from './Components/SearchStation'
import TableStation from './Components/TableStation'
import { instance } from './Services/UserService'


function App() {

  const [listUsers, setListUsers] = useState()

  useEffect(() => {
    getUsers();
  }, [])

  let getUsers = async () => {
    let res = await instance.get(`products?limit=5&skip=${page}`);
    if (res && res.data) {
      setListUsers(res.data.products)
    }
  }
  console.log("list users:", listUsers);






  return (
    <div className='w-full'>
      <Header />
      <SearchStation />
      <TableStation
        listUsers={listUsers}
      />
      <Pagination />
    </div>
  )
}

export default App
