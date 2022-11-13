import React from "react";
import axios from "axios";
// name, email, pawword, age
const Register = () => {
    let data = JSON.stringify({
    "name": "Domi",
    "email": "test97490@gmail.com",
    "password": "12345678",
    "age": 20
    });

    let config = {
    method: 'post',
    url: 'https://api-nodejs-todolist.herokuapp.com/user/register',
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
            <input type="name" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="age" placeholder="Age" />
            <button type="submit">Login</button>
        </form>
    )
}
export default Register;