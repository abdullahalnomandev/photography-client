import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { firebase } from '../../firenase/firebase.config';
import { firebase } from "../../";
export default function AddAdmin() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [admins, setAdmins] = useState([])
    const onSubmit = data => {
        const formData = {
            email: data.email,
            role: 'admin',

        }
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user)
                firebase.auth().signOut().then(() => {
                    console.log('sign out admin')
                }).catch((error) => {

                });
                fetch("https://stormy-citadel-51130.herokuapp.com/addAdmin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                })
                    .then(response => response.json())
                    .then(result => {
                        if (result.error) {
                            alert(result.error)
                        }

                    })
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });

    };

    useEffect(() => {
        fetch("https://stormy-citadel-51130.herokuapp.com/admin")
            .then(response => response.json())
            .then(result => setAdmins(result))
    })
    const handleAdminDelete = (id) => {


    }



    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)} className='ms-md-5 ms-1'>
                {/* register your input into the hook by invoking the "register" function */}
                <input {...register("email")} className="form-control input mt-4" placeholder="Enter Admin Email" />
                <input {...register("password")} type="password" className="form-control input mt-4" placeholder="Enter Admin Password" />
                <input type="submit" value="Add Admin" className="btn btn-danger mt-4 submit-button ms-0" />
            </form>

            <div className='mt-5'>

                <h5 className='mt-5'>Admin Lists</h5>
                <div class="table-responsive-sm ">
                    <table class="table">

                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                admins.map((u, index) => <tr>
                                    <th scope="row">{index = index + 1}</th>
                                    <td>{u.email}</td>
                                    <td> {index === 1 ? <FontAwesomeIcon icon={faArrowRight} className='text-dark ms-3 disable' /> : <FontAwesomeIcon icon={faTimes} className='text-danger ms-3 disable' onClick={() => handleAdminDelete(u._id)} style={{ cursor: 'pointer' }} />
                                    }


                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>


            </div>





        </div>
    );
}