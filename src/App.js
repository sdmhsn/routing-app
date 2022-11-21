import React, { useState } from 'react';
// import { Routes, Route, NavLink, Navigate } from 'react-router-dom'; // In react-router-dom v6, "Switch" is replaced by routes "Routes".
import { Routes, Route, NavLink } from 'react-router-dom'; // In react-router-dom v6, "Switch" is replaced by routes "Routes".
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import Post from './pages/Post';
import Member from './pages/Member';
import Login from './pages/Login';
import GuardRoute from './components/GuardRoute';
import './styles/App.css';

const App = () => {
  const [isLogin, setLogin] = useState(false);

  return (
    <div className="App">
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/member">Member</NavLink>
        </li>
        <li>
          <NavLink to="/category">Category</NavLink>
        </li>
        <li>
          {/* <li>
            <NavLink to="/login">{ isLogin ? 'Logout' : 'Login' }</NavLink>
          </li> */}
          {isLogin ? 
            <NavLink to="/logout" onClick={(e) => {
              e.preventDefault();
              setLogin(false);
            }}>Logout</NavLink>
            : <NavLink to="/login">Login</NavLink>
          }
        </li>
      </ul>
      <div className="main">
        <Routes> {/* In react-router-dom v6, "Switch" is replaced by routes "Routes". */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="member" element={<Navigate to="/" replace={true} />} /> */}
          {/* <Route path="member" element={<GuardRoute isLogin={isLogin}><Member /></GuardRoute>} /> */}
          <Route path="member" element={
            <GuardRoute isLogin={isLogin}>
              <Member />
            </GuardRoute>
          } />
          <Route path="login" element={
            <Login isLogin={isLogin} setLogin={setLogin} />
          } />
          <Route path="category/*" element={<Category />} />
          <Route path="post/:id" element={<Post />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
