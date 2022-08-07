import React, { useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AiOutlineLogin } from "react-icons/ai";
import { ErrorToast, IsEmail, IsEmpty, IsMobile } from '../../helper/FormHelper';
import {RegistrationRequest} from '../../APIRequest/APIRequest'

const Registration = () => {

    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef=useRef();
    let navigate=useNavigate()

    const onRegistration=()=>{
        const email=emailRef.value;
        const firstName=firstNameRef.value;
        const lastName=lastNameRef.value;
        const mobile=mobileRef.value;
        const password=passwordRef.value;
        const photo='<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAChJREFUOE9jZKAyYKSyeQyjBlIeoqNhOBqGZITAaLIhI9DQtIzAMAQASMYAFTvklLAAAAAASUVORK5CYII="/>'

        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }
        else if(IsEmpty(firstName)){
            ErrorToast("First Name Required !")
        }
        else if(IsEmpty(lastName)){
            ErrorToast("Last Name Required !")
        }
        else if(!IsMobile(mobile)){
            ErrorToast("Valid Mobile  Required !")
        }
        else if(IsEmpty(password)){
            ErrorToast("Password Required !")
        }else{
            RegistrationRequest(email,firstName,lastName,mobile,password,photo).then((result)=>{
                if(result===true){
                    navigate("/login");
                }
            })
        }
    }

  return (
    <div className="container">
        <div className="row  justify-content-center">
            <div className="col-md-10 col-lg-10 center-screen">
                <div className="card shadow animated fadeIn w-100 p-3">
                    <div className="card-body shadow m-3">
                        <h4>Sign Up</h4>
                        <hr/>
                        <div className="container-fluid m-0 p-0">
                            <div className="row m-0 p-0">
                                <div className="col-md-4 p-2">
                                        <label>Email Address</label>
                                        <input ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>First Name</label>
                                        <input ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Last Name</label>
                                        <input ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Mobile Number</label>
                                        <input ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Password</label>
                                        <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>

                                </div>
                                <div lassName="row mt-2 p-0">
                                    <div className="col-md-4 p-2">
                                        <button onClick={onRegistration} className="regbutton btn mt-3 w-100 float-end btn-primary animated fadeInUp">SignUp <AiOutlineLogin /></button>
                                    <span>
                                        <span className='text h6 animated fadeInUp'>Already SignUp ?</span><br/>
                                        <Link className="loginText text-center h6 animated fadeInUp" to="/Login">Sign In </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Registration
