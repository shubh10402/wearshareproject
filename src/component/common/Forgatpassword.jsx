import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Forgatpassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        let errors = {};

        // Email validation
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email format';
        }

        // Password validation
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            errors.password = 'Password must contain uppercase, lowercase, and a number';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        // TODO: Handle password reset logic (API call)
        navigate('/Loginpageuser');
    };

    return (
        <div style={{ marginTop: 90,paddingLeft:600, textAlign: 'center' }}>
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <h1><b>Wear</b>Share</h1>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">
                            Forgot your password? Enter your email and new password to reset it.
                        </p>
                        <form onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                            {/* Password Input
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="New Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>} */}

                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Reset Password
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p className="mt-3 mb-1">
                            <a href="./Loginpageuser">Back to Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgatpassword;
