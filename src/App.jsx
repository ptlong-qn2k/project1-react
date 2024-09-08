import { useState, useEffect } from 'react'
import './Styles/App.css'
import axios from 'axios'

import Pagination from "./Components/Pagination"
import Header from './Components/Header'
import SearchStation from './Components/SearchStation'
import TableStation from './Components/TableStation'
import { fetchData } from './Services/UserService'
// import DeleteStation from './ComponentsPopup/DeleteStation'


function App() {
  const [sidebar, setSidebar] = useState(false)
  const [page, setPage] = useState(1);
  const [perpage, setPerpage] = useState("5");
  const [listUsers, setListUsers] = useState()
  const [limit, setLimit] = useState(5)
  const [uid, setid] = useState(0)
  const [count, setCount] = useState()
  const [title, setTitle] = useState("title")
  const [sku, setSku] = useState("sku")
  const [weight, setWeight] = useState("weight")
  const [price, setPrice] = useState("price")
  const [search, setSearch] = useState("")
  const [dataTotal, setDatatotal] = useState()



  // const [dataDelete, setDataDelete] = useState()
  // const [status, setStatus] = useState(false)
  // const [status2, setStatus2] = useState(false)

  useEffect(() => {
    //   let func = (para1 = 7, para2 = 43) => {
    //     console.log("tong cac so truyen vao trong : ", para1 + para2)
    //   }

    //   func()
    //   let myfun = (bien1, bien2, ...bienn) => {
    //     console.log("bien 1:", bien1);
    //     console.log("bien 2:", bien2);
    //     console.log("bienn:", bienn);
    //   }
    //   myfun("Nhi", "Lanh", "long", "Nhi2", "Danh", "okokok")

    //   function Function1() {
    //     console.log("function es5");
    //   }
    //   let Function2 = () => {
    //     console.log("function es6");
    //   }

    //   let myarr = ["Nhi", "NHị", "Long", "Lành"]
    //   let [a, b, , d] = myarr
    //   console.log(`du lieu la ${a} va ${b} vs ${d}`);

    //   let { w, ...other } = { q: 1, w: 2, e: 3, r: 4 }
    //   console.log(other);
    //   let [x, ...other2] = ["x = 3", "y = 7", "z = 19", "t = 22"]
    //   console.log(other2);


    getUsers();
  }, [uid, limit, title, sku, weight, price, search])

  let getUsers = async () => {
    let res = await fetchData.get(`products/search?q=${search}&limit=${limit}&skip=${uid}&select=${title},${sku},${weight},${price}`);

    if (res && res.data) {
      setListUsers(res.data.products)
      setDatatotal(res.data.total)
      res.data.total % limit == 0 ? setCount(Math.floor(res.data.total / limit)) : setCount(Math.floor(res.data.total / limit) + 1)
    }
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

  const onChangeUid = (value_page) => {   // id la data from child
    setid((value_page - 1) * limit)
    console.log("valuepage", value_page);
    setPage(value_page)
  }

  const onChangePerPage = (value_count) => {
    setPerpage(value_count);  //trùng với limit
    setLimit(value_count)
    setid(0)
    setPage(1)
    // setStatus2(true)
  }

  const dataSearch = (value_search) => {
    setSearch(value_search)
    setLimit(5)
    setid(0)
    setPage(1)
    // setStatus(true)
  }

  const deleteData = (value) => {
    console.log(value);
  }

  const statusSidebar = (value) => {
    setSidebar(!sidebar)
  }
  console.log("check", sidebar);


  return (
    <div className={`px-10 mx-auto ${sidebar ? "ml-[250px] w-[calc(100%_-_250px)]" : "w-full"}`}>
      <Header
        sidebar={sidebar}
        statusSidebar={statusSidebar}
      />
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
        page={page}
        perpage={perpage}
        limit={limit}
        dataTotal={dataTotal}
        onChangeUid={onChangeUid}
        count={count}
        onChangePerPage={onChangePerPage}
      />

    </div>
  )
}

export default App
