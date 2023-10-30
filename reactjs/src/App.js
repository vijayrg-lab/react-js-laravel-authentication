import logo from './logo.svg';
import './App.css';
import Users from './Users';
import "bootstrap/dist/css/bootstrap.min.css"; 
import {Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Create from './pages/create'
import Edit from './pages/Edit'
import View from './pages/View'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AuthUser from './pages/AuthUser';
import Guest from './navbar/guest';
import Auth from './navbar/auth';

function App() {
  const {getToken} = AuthUser();
  if(!getToken()){
    return <Guest />
  }
  return (
    <Auth />
    // <div className="App">
    // <div>
    //    <nav className='navbar navbar-expand navbar-dark bg-dark'>
    //     <div className='navbar-nav mr-auto'>
    //       <li className='nav-item'>
    //         <Link to={"/"} className="nav-link">Home</Link>
    //       </li>
    //       <li className='nav-item'>
    //         <Link to={"/create"} className="nav-link">Create</Link>
    //       </li>
    //       <li className='nav-item'>
    //         <Link to={"/login"} className="nav-link">Login</Link>
    //       </li>
    //       <li className='nav-item'>
    //         <Link to={"/dashboard"} className="nav-link">Dashboard</Link>
    //       </li>
    //     </div>
    //   </nav>
    //   <div className='container'>
    //         <Routes>
    //           <Route path='/' element={<Home />} />
    //            <Route path='/create' element={<Create />} />
    //            <Route path='/login' element={<Login />} />
    //            <Route path='/dashboard' element={<Dashboard />} />
    //           <Route path='/edit/:id' element={<Edit />} />
    //           <Route path='/view/:id' element={<View />} />
    //         </Routes>
    //       </div>
    //   {/* <h1>React App</h1>
    //   <h2>Users</h2>
    //   <Users /> */}
    // </div>
  );
}

export default App;
