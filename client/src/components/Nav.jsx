import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <nav>
        <div>
        <Link to='/'><h1>Sell Your Stuff</h1></Link>
        </div>

        <div>
          {
            currentUser ? <>
              
             
              <ul>
                <li>
                <p>{currentUser.username}</p>
                <Link to='/register'>items</Link>
              </li>
              <li>
              <button onClick={handleLogout}> LogOut</button>
              </li>
            </ul>
            </> :
              <ul>
              <li>
                <Link to='/register'>Register</Link>
              </li>
              <li>
              <Link to='/login'>Login</Link>
              </li>
            </ul>
          }
          <hr/>
          {
            currentUser && <>
              <Link>items</Link>
              <Link>categories</Link>
              </>
          }
        
        </div>
        
      </nav>
    </div>
  )
}
