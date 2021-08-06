import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Authentication/Login/Login';
import SignUp from './Components/Authentication/SignUp/SignUp';
import { createContext, useEffect, useState } from 'react';
import Admin from './Components/Admin/Admin/Admin';
import PrivateRoute from './Components/Authentication/PrivateRoute/PrivateRoute';
import SingleService from './Components/Home/Main/Ma/SingleService/SignleService';
import Checkout from './Components/User/Checkout/Checkout';
import UserDashboard from './Components/User/UserDashboard/UserDashboard';
export const AuthContext = createContext()
export const SharedDataContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    email:""
  })
  const [sharedData,setSharedData] = useState({})
  const [id,setId] = useState(0)
  const [role,setRole] = useState('')
  const [users,setUsers] = useState([])
  const [admins,setAdmins] = useState([])
  const [allApi,setAllApi] = useState([])
  useEffect(() => {
    fetch('https://stormy-citadel-51130.herokuapp.com/users')
    .then(response=>response.json())
    .then(data=>setUsers(data))

  },[]);
  useEffect(() => {
    fetch("https://stormy-citadel-51130.herokuapp.com/admin")
        .then(response => response.json())
        .then(result => setAdmins(result))
},[])
useEffect(() => {
  setAllApi([...allApi,...users,...admins])

},[ admins ])

  return (
    <div className="">
      <SharedDataContext.Provider value = {{sharedData,setSharedData,id,setId,allApi,setAllApi,role,setRole}} >
      <AuthContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/service/:id">
              <SingleService />
            </Route>
            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/userDashboard/orders">
              <UserDashboard />
            </PrivateRoute>

          </Switch>
        </Router>
      </AuthContext.Provider>
      </SharedDataContext.Provider>
    </div>
  );
}

export default App;
