import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

import Pagination from './Components/Pagination'
import Header from './Components/Header'
import SearchStation from './Components/SearchStation'
import TableStation from './Components/TableStation'
import { fetchData } from './Services/UserService'


function App() {

  const [listUsers, setListUsers] = useState()

  useEffect(() => {
    getUsers();
  }, [])

  let getUsers = async () => {
    let res = await fetchData.get(`products?limit=5&skip=5`);
    if (res && res.data) {
      setListUsers(res.data.products)
    }
  }
  console.log("list users:", listUsers);

  const [parentToChild, setParentToChild] = useState()
  const handPage = (id) => {
    console.log("datapage:", id);
    setParentToChild(id)
  }



  return (
    <div className='w-[1409px]  mx-auto'>
      <Header />
      <SearchStation />
      <TableStation
        listUsers={listUsers}
      />
      <Pagination
        onPage={handPage}
      />
    </div>
  )
}

export default App
