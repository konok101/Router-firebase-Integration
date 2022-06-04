import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInwithGoogle}= useFirebase();
    return (
        <div>
            <h1>Please login</h1>
             <div style={{margin: '20px'}}>
             <button onClick={signInwithGoogle}>Google Sign In</button>
             </div>

            <form>
                <input type="email" placeholder='your email' name="" id="" /> <br />
                <input type="password" name="" placeholder='your password' id="" />
                <br />
                <input type="submit" value="Login" />
            </form>

        </div>
    );
};

export default Login;