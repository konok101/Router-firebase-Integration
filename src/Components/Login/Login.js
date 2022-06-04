import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Please login</h1>
            <button>Google Sign In</button> <br />
            <input type="email" placeholder='your email' name="" id="" /> <br />
                <input type="password" name="" placeholder='your password' id="" />
                <br />
                <input type="submit" value="Login" />
        </div>
    );
};

export default Login;