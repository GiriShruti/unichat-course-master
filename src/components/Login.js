import React from 'react';
import { GoogleOutlined , FacebookOutlined} from '@ant-design/icons';
import "firebase/app";


import firebase from 'firebase/app';
import { auth } from '../firebase';
const Login = () => {

return (
<div id = "login-page">
    <div id = "login-card">
        <h2>welcome to Unichat!</h2>
        <div 
        className =  "login-button google"
       onClick = {() => {
        // await axios.post('https://api.chatengine.io/users/',
        //     { headers: authObject,
        //      body: {
        //         'username': username,
        //         'secret': password
        //         }
        //     });
        //     // login the user
        //     localStorage.setItem('username', username)
        //     localStorage.setItem('password', password)
        const obj = new firebase.auth.GoogleAuthProvider();
        console.log(obj);
        console.log(auth.signInWithRedirect(obj))}} >
    <GoogleOutlined/>Sign In with Google </div>
    <br /> <br/>
    <div
    className = "login-button facebook" 
  onClick = {() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}> 
    
<FacebookOutlined/>Sign In with facebook</div>
    </div> 

</div>

);

}

export default Login;
