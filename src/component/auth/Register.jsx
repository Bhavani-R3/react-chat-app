import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import imgSrc from '../../images/pics'
import { toast } from "react-toastify";
// firebase
import { auth, db } from '../../firebase'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth'
import { doc,setDoc } from 'firebase/firestore' // documents

/* 
    {
        displayName,
        email,
        photoURL,
        phoneNumber,
        password
    }
*/

function Register(props) {
    const [user,setUser] = useState({
        name: "",
        email: "",
        pass: ""
    })

    // navigate ref / instance
    const navigate = useNavigate()

    // handler 
    const readData = async (e) => {
        const { name, value } = e.target 
        setUser({...user, [name]: value})
    }

    // submitHandler
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            console.log(`user =`, user)
            let email = user.email
            let password = user.pass

            // store user credentials in authentication
            const res = await createUserWithEmailAndPassword(auth, email, password)
                  /*   // verification email link sent to the user email id
                    auth.sendEmailVerification(email)
                    .then(res => {
                        toast.success("Verification email sent successfully.. check your inbox")
                    }).catch(err => toast.error('something went wrong in an email, verification link failed to send')) 
                }).catch( err => toast.error(err)) */

            // update user profile
            await updateProfile(res.user, {
                displayName: user.name
            })

            // store the users data in firestore
            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName: user.name,
                email,
                photoURL: "https://www.svgrepo.com/download/192244/man-user.svg"
            })

            // create empty chat object in chat document of the register user
            await setDoc(doc(db, "userChats", res.user.uid), {})

            toast.success(`User registered successfully`)

            navigate(`/login`)
        } catch (err) {
            toast.error(err.message)
        }
    }

    return(
        <div className="container">
            <div className="wrapper">
                <span className="logo">React-Chat-App</span>
            </div>

            <div className="form-wrapper">
                <div className="left">
                    <img src={imgSrc.signUpImage} alt="no image" />
                </div>
                <div className="right">
                    <div className="title">
                        Register Here
                    </div>
                    <form autoComplete="off" onSubmit={submitHandler}>
                        <div className="form-item">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="name" value={user.name} onChange={readData} id="name" className="form-input" placeholder="Enter Name Here" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={user.email} onChange={readData} id="email" className="form-input" placeholder="Enter Email Id" required />     
                        </div>
                        <div className="form-item">
                            <label htmlFor="pass">Password</label>
                            <input type="password" name="pass" value={user.pass} onChange={readData} id="pass" className="form-input" placeholder="Enter Your Password" required />
                        </div>
                        <div className="form-item">
                            <input type="submit" value="Register" className="btn btn-green" />
                        </div>
                    </form>
                    <div className="block">
                        <NavLink to={`/login`} className="btn-link">
                            Already Registered...Login Here..
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register