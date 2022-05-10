import './App.css';
import { Route, Routes } from 'react-router-dom';
import Users from './components/Users/Users';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user' element={<Users />}></Route>
        <Route path='/user/add' element={<AddUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
