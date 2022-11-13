import React from "react";
// email, password
const Login = () => {
    return (
        <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    )
}
export default Login;