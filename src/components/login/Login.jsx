import React, { useState, useContext } from 'react';
import AuthContext from './Authcontext';
import "../../styles/login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        // handle login logic
        auth.login(); // call login function from AuthContext
    };

    return (
        <div className="center">
            <div className="form">
                <div className="header">Login Form</div>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Email or Username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                    </div>
                    <div className="input-group">
                        <input
                            id="pswrd"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                       
                    </div>
                    <button type="submit" className="submit-btn">
                        Sign in
                    </button>
                    <a href="#" className="forgot-password">
                        Forgot Password?
                    </a>
                </form>
            </div>
        </div>
    );
};

export default Login;
