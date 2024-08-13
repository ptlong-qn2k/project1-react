import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

import Pagination from "./Components/Pagination"
import Header from './Components/Header'
import SearchStation from './Components/SearchStation'
import TableStation from './Components/TableStation'
import { fetchData } from './Services/UserService'
import DeleteStation from './ComponentsPopup/DeleteStation'


function App() {

  const [listUsers, setListUsers] = useState()
  const [uid, setid] = useState(0)
  const [total, setTotal] = useState()
  const [title, setTitle] = useState("title")
  const [sku, setSku] = useState("sku")
  const [weight, setWeight] = useState("weight")
  const [price, setPrice] = useState("price")
  const [search, setSearch] = useState("")
  const [dataDelete, setDataDelete] = useState()
  const [status, setStatus] = useState(false)


  useEffect(() => {
    console.log("check listuser");

    getUsers();
  }, [uid, title, sku, weight, price, search])

  let getUsers = async () => {
    let res = await fetchData.get(`products?limit=5&skip=${uid}&select=${title},${sku},${weight},${price},/search?q=${search}`);
    if (status && search.length > 0) {
      res = await fetchData.get(`products/search?q=${search}`);
    } else {
      setStatus(false)
    }

    if (res && res.data) {
      setListUsers(res.data.products)
      console.log("ressss:", res.data.products);
      setTotal(res.data.total);
      res.data.total % 5 == 0 ? setTotal(Math.floor(res.data.total / 5)) : setTotal(Math.floor(res.data.total / 5) + 1)
    }
  }
  // console.log("total:", total);
  // console.log("uid dataL", uid);

  const onChangePage = (id) => {   // id la data from child
    // console.log("datapage:", id);
    setid((id - 1) * 5)
    console.log("check value", id);
  }
  const dataTitle = () => {
    title == "" ? setTitle("title") : setTitle("")
  }
  const dataSku = () => {
    sku == "sku" ? setSku("") : setSku("sku")
  }
  const dataWeight = () => {
    weight == "" ? setWeight("weight") : setWeight("")
  }
  const dataPrice = () => {
    price == "" ? setPrice("price") : setPrice("")
  }
  const dataSearch = (value) => {
    setSearch(value)
    console.log("checkvalue:", value);
    console.log("check search:", search);
    setStatus(true)
  }


  const deleteData = (value) => {
    console.log(value);
  }

  return (
    <div className='w-full px-10 mx-auto'>
      <Header />
      <SearchStation
        dataSearch={dataSearch}
      />
      <TableStation
        listUsers={listUsers}
        dataTitle={dataTitle}
        dataSku={dataSku}
        dataWeight={dataWeight}
        dataPrice={dataPrice}
        deleteData={deleteData}
      />
      <Pagination
        // page={4}
        onChangePage={onChangePage}
        total={total}
      // page={page}
      />

    </div>
  )
}

export default App
