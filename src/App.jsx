import './Styles/App.css'
import { Routes, Route, useParams } from "react-router-dom";
import MyComponent from './ComponentAll'
import Products from './ComponentPage/Products'
import Reports from './ComponentPage/Reports'
import Teams from './ComponentPage/teams'
import Message from './ComponentPage/Messsage'
import UserParams from './ComponentPage/useParams'
import GetSingleRouter from './ComponentRouter/GetSingleRouter'
import GetEditRouter from './ComponentRouter/EditRouter'
import DeleteRouter from './ComponentRouter/DeleteRouter'
import Supports from './ComponentPage/Support';
import CreateRouter from './ComponentRouter/CreateRouter';
function App() {



  return (
    <Routes>
      <Route path="/" element={<MyComponent />} ></Route>
      <Route path='/params/:id' element={<UserParams />} />
      <Route path="/products" element={<Products />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/team" element={<Teams />} />
      <Route path='/message' element={<Message />} />
      <Route path='/support' element={<Supports />} />
      <Route path='/getsingle/:id' element={<GetSingleRouter />} />
      <Route path='/getedituser/:id' element={<GetEditRouter />} />
      <Route path='/deleteuser/:id' element={<DeleteRouter />} />
      <Route path='/create-user' element={<CreateRouter />} />
      {/* <Route path='/page/:page' element={<MyComponent />} /> */}
    </Routes>
  )
}

export default App
