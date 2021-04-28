import {Switch, Route, useHistory} from 'react-router-dom'
import './App.css';
import Layout from './layouts/Layout';
import { useState, useEffect } from 'react';
import Login from './screens/Login';
import Items from './screens/Items';
import ItemDetails from './screens/ItemDetails'
import MainContainer from './containers/MainContainer'
import Register from './screens/Register';
import CreateItem from './screens/CreateItem'
import { loginUser, registerUser , verifyUser, removeToken} from './services/auth';
import Edititem from './screens/Edititem';
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify()
  }, [])
  
  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/')
  }
  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/')
  }


  
  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={ handleLogout}>
        <hr />
        <Switch>
        <Route path='/register'>
            <Register handleRegister={handleRegister}/>
          </Route>
          <Route path='/login'>
            <Login handleLogin={handleLogin }/>
          </Route>
          <Route path='/items/:id/edit'>
            
            <Edititem/>
          </Route>
          <Route path='/items/new'>
          <CreateItem/>
          </Route>
          <Route path='/items/:id'>
            <h3>items id</h3>
            <ItemDetails/>
          </Route>
          <Route path='/items'>
          <MainContainer/>
          </Route>
          <Route exact path='/'>
            <h3>home page</h3>
            <MainContainer/>
          </Route>

          
        </Switch>
      </Layout>

     
    </div>
  );
}

export default App;
