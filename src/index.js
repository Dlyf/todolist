import React from 'react';
import ReactDOM from 'react-dom/client';
// import InputCreateTodo from './component/Form/InputCreateTodo';
import Header from './component/Header/Header';
// import Todos from './component/Todos';
import Register from './component/Auth/Register'
import Login from './component/Auth/Login';
import Logout from './component/Auth/Logout';
import AddTask from './component/AddTask';
import AddAllTask from './component/AddAllTask';
const App = () => {
    return (
        <div>
            <Header />
            {/* <InputCreateTodo /> */}
            <Register />
            <Login />
            <Logout />
            <hr />
            <AddTask />
            <AddAllTask />
        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />)
