import React from "react";
import './login.css';
export class Login extends React.Component {
    
    render() {
        return (
            <div className="container">
                <section className="myform-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="form-area login-form">
                                    <div className="form-content">
                                        <h2>Login</h2>
                                        <p>You choose the right option</p>
                                        {/* <ul>
                                        <li><a href="https://www.facebook.com/login.php" className="facebook"><FaFacebookF /></a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="https://twitter.com/i/flow/login" className="twitter"><FaTwitterSquare /></a></li>
                                    </ul> */}
                                    </div>
                                    <div className="form-input">
                                        <h2>Enter Credentials</h2>
                                        <form >
                                            <div class="form-group">
                                                <input className="loginInfo" type="email" name="name" autoComplete="off" required />
                                                <label>Email-Id</label>
                                            </div>
                                            <div class="form-group">
                                                <input className="loginInfo" type="password" name="password" autoComplete="off" required />
                                                <label>Password</label>
                                            </div>
                                            <div class="myform-button">
                                                <button type="submit" className="myform-btn">Login</button>
                                            </div>
                                            <div>
                                                <small className="form-text text-muted signup-text">Don't have an Account?
                                                </small>
                                                <span className="signUPtext"><a>Sign-Up</a></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div >
        )
    }
}
