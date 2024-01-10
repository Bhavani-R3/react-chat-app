import React from "react";
import { NavLink } from "react-router-dom";
import imgSrc from '../../images/pics'

function Register(props) {
    return(
        <div className="container">
            <div className="wrapper">
                <span className="logo">React-Chat-App</span>
            </div>

            <div className="wrapper">
                <div className="left">
                    <img src={imgSrc.signUpImage} alt="no image" />
                </div>
                <div className="right">
                    <div className="title">
                        Register Here
                    </div>
                    <form autoComplete="off">
                        <div className="form-item">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="name" id="name" className="form-input" placeholder="Enter Name Here" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-input" placeholder="Enter Email Id" required />     
                        </div>
                        <div className="form-item">
                            <label htmlFor="pass">Password</label>
                            <input type="password" name="pass" id="pass" className="form-input" placeholder="Enter Your Password" required />
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