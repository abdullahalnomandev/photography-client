import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../../firenase/firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import Navigation from '../../Home/Header/Navigation/Navigation';
import { AuthContext, SharedDataContext } from '../../../App';
const SignUp = () => {
    const [users, setUsers] = useState({})
    const [error, setError] = useState("")
    const { allApi, setAllApi, role, setRole } = useContext(SharedDataContext)
    const [loggedInUser, setLoggedInUser] = useContext(AuthContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleFilterByRole = () => {
        setRole("user")

    }
    const handleChangeInfo = (e) => {
        if (e.target.name === 'name') {
            const newUsers = { ...users }
            newUsers.name = e.target.value
            setUsers(newUsers)

        }
        if (e.target.name === 'email') {
            const newUsers = { ...users }
            newUsers.email = e.target.value
            setUsers(newUsers)

        }
        if (e.target.name === 'password') {
            const newUsers = { ...users }
            newUsers.password = e.target.value
            setUsers(newUsers)

        }
        if (e.target.name === 'confirmPassword') {
            const newUsers = { ...users }
            newUsers.confirmPassword = e.target.value
            setUsers(newUsers)

        }

    }
    const handleSignUp = () => {
        if (users.password === users.confirmPassword) {

            firebase.auth().createUserWithEmailAndPassword(users.email, users.password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    setLoggedInUser({ email: user.email })
                    handleFilterByRole()
                    history.replace(from);
                    fetch("https://stormy-citadel-51130.herokuapp.com/addUsers", {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: users.name, role: "user", email: users.email })
                    })
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    setError(errorMessage)
                    console.log(errorMessage)
                });

        }
    }
    return (
        <div>
            <Navigation />
            <div className="d-flex container flex-column align-items-center justify-content-center mt-5 signup-form mb-3">

                <h5 className="mt-5">Enter Your Information Here</h5>
                <input type="text" name="name" placeholder="Enter Name" onBlur={handleChangeInfo} className='mt-3 form-control input' />
                <input type="text" name="email" placeholder="Enter Email" onBlur={handleChangeInfo} className='mt-3 form-control input' />

                <input type="password" name="password" placeholder="Enter Password" onBlur={handleChangeInfo} className='form-control input mt-3' />

                <input type="password" name="confirmPassword" placeholder="Enter Confirm  Password" onBlur={handleChangeInfo} className='form-control input mt-3' />

                <button class="btn btn-success mt-3 mb-2" onClick={handleSignUp}> Sign Up </button>


            </div>
            <div className="text-center">
                <Link to="/">Home</Link>

            </div>
        </div>
    );
};

export default SignUp;