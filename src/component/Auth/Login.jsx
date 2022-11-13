import React from "react";
import axios from "axios";
// email, password
const Login = () => {
    let data = JSON.stringify({
    "email": "muh.nurali43@gmail.com",
    "password": "12345678"
    });

    let config = {
    method: 'post',
    url: 'https://api-nodejs-todolist.herokuapp.com/user/login',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
    return (
        <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    )
}
export default Login;