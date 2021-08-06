import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext, SharedDataContext } from '../../../App';
import { firebase } from '../../firenase/firebase.config';
import Navigation from '../../Home/Header/Navigation/Navigation';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { allApi, setAllApi, role, setRole } = useContext(SharedDataContext)
    const [loggedInUser, setLoggedInUser] = useContext(AuthContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleFilterByRole = (u) => {
        const newData = allApi.filter(api => api.email === u.email)
        console.log(u.email, newData)
        // setRole(newData.role)
        setRole(newData[0].role)

    }

    const handleSignIn = () => {


        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                setLoggedInUser({ email: user.email })
                handleFilterByRole(user)
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)
            });

    }
    return (
        <div>
            <Navigation />
            <div className="d-flex container flex-column align-items-center justify-content-center mt-5 signup-form mb-5">

                <h5 className="mt-5">Enter Email and Password</h5>
                <input type="text" className='form-control mt-2 input' placeholder="Enter Email" name='email' onChange={((e) => setEmail(e.target.value))} />
                <input type="password" className='form-control mt-5 input' placeholder="Enter Password" name='pass' onChange={((e) => setPassword(e.target.value))} />
                <button class="btn btn-success mt-4" onClick={handleSignIn}> Sign In </button>
                <div className="mb-4">


                </div>

            </div>
            <div className="mt-5 text-center">

            </div>
        </div>
    );
};

export default Login;