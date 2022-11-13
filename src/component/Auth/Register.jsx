import React from "react";
// name, email, pawword, age
const Register = () => {
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