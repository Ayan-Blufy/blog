import React,{ useState,useEffect} from 'react'
import './App.css';
import { db, auth, provider } from './firbase';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/LogIn';
import CreatePost from './pages/CreatePost';
import {signOut} from 'firebase/auth';
function App() {

  const [isauth,setisauth]=useState(false);


  useEffect(()=>{
    const k=localStorage.getItem('isauth');
    setisauth(k);
  },[]);

  const logout=async()=>{
    await signOut(auth);
    localStorage.clear();
    setisauth(false);
  }
  


  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
      

        {!isauth?<Link to='/login'>login</Link>:
        <>
          <Link to='/post'>Create Post</Link>
        <button onClick={logout}>LogOut</button>
          </>}

      </nav>

      <Routes>
        <Route exact path='/' element={<Home isauth={isauth} etisauth={setisauth}/>} />
        <Route exact path='/login' element={<Login setisauth={setisauth} />} />
        <Route exact path='/post' element={<CreatePost isauth={isauth}/>} />


      </Routes>

    </Router>
  );
}

export default App;
