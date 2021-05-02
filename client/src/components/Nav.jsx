import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
export default function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} className="logo" alt="logo.png" />
          </Link>
        </div>

        <div className="nav-links">
          {currentUser ? (
            <>
              
              <ul>
                <li>
                  <p className="username_p">Welcome {currentUser.username}</p>
                </li>
                <li>
                  <button className="username_p" onClick={handleLogout}> LogOut</button>
                </li>
                <li>
                <>
                    <Link to="/items">items</Link>
                    
                    <Link to="/items/new">create</Link>
                    <Link to="/category">categories</Link>
            </>
                </li>
              </ul>
            </>
          ) : (
              
            <div className="nav-links">
            <ul>
              <li>
                <Link to="/items">items</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
                </ul>
                </div>
              
          )}
         
    
        </div>
      </nav>
    </div>
  );
}
