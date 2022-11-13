import React from 'react';
import ReactDOM from 'react-dom/client';
// import InputCreateTodo from './component/Form/InputCreateTodo';
import Header from './component/Header/Header';
// import Todos from './component/Todos';
import Register from './component/Auth/Register'
import Login from './component/Auth/Login';
import Logout from './component/Auth/Logout';
const App = () => {
    return (
        <div>
            <Header />
            {/* <InputCreateTodo /> */}
            <Register />
            <Login />
            <Logout />
            
        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />)
