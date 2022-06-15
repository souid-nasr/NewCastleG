import React, { useState, useEffect } from 'react';
import { Navigationbar } from "./Navigationbar"
import  Slider  from "./Slider"
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

export const SignUp = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    const [data, setData] = useState({
        firstName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/");
            alert("succesfull")
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };


    return (
        <>
            <div >
                <Navigationbar />
                <div className="split-screen">
                    <div className="left">
                        <section className="copy">
                            <h1>What’s your study abroad status?</h1>
                            <p>
                                Deciding where to study can be an exciting but tricky decision to make,<br /> but our team here are to help. Below you can navigate to the types <br />of degrees you can progress onto or get going with your application.
                            </p>
                        </section>
                    </div>

                    <div className="right">
                        <form className="signup-field" onSubmit={handleSubmit}>
                            <section className="copy">
                                <h2>Sign up</h2>
                                <div className='login-container'>
                                    <p>Already have an account ? <Link to="/" > <strong> Log In </strong></Link>
                                    </p>
                                </div>
                            </section>

                            <div className='input-container name-signup'>
                                <label for='fname'>First Name</label>
                                <input id='fname' type='text' placeholder="First Name" name="firstName" onChange={handleChange} value={data.firstName} required />
                            </div>

                            <div className='input-container email-signup'>
                                <label for='email'>Email</label>
                                <input id='email' type='email' placeholder="Email" name="email" onChange={handleChange} value={data.email} required />
                            </div>

                            <div className='input-container password-signup'>
                                <label for='email'>password</label>
                                <input id='password' type='password'
                                    placeholder="Must be at least 6 character"
                                    name="password"
                                    onChange={handleChange}
                                    value={data.password}
                                    required
                                />
                            </div>

                            <div className="input-container cta">
                                <label className='checkbox-container'>
                                    <input type='checkbox'></input>
                                    <span className='checkmark'></span>
                                    sign up for email updates .
                                </label>
                            </div>

                            {error && <div className="error_msg" >{error}</div>}


                            <button className='signup-btn' type='submit'>Sing up</button>
                            <section class='copy legal'>
                                <p><span className='small'>By continuing, you agree to accept our <br />
                                    <a href="#">Privacy Policy</a>
                                    &amp; <a href="#">Terms of service</a></span></p>
                            </section>
                        </form>
                    </div>

                </div>

            </div>
        </>
    );
};
