import React, { useState } from 'react';

const AuthForm = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Mock user credentials for testing
    const mockUser = {
        email: 'test@example.com',
        password: 'password123',
        token: 'mock-token-12345'
    };

    const handleLogin = () => {

        if (email === mockUser.email && password === mockUser.password) {
            // Simulate receiving a token
            localStorage.setItem('token', mockUser.token);
            setIsAuthenticated(true);
            setError('');
        } else {

            setError('Invalid credentials, please try again.');
        }
    };

    return ( <
        div className = "auth-form" >
        <
        h2 className = 'login-header' > Login < /h2> <
        input type = "email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        placeholder = "Email"
        required /
        >
        <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        placeholder = "Password"
        required /
        >
        <
        button onClick = { handleLogin } > Login < /button> {
        error && < p className = "error" > { error } < /p>} < /
        div >
    );
};

export default AuthForm;