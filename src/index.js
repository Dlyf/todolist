import React from 'react';
import ReactDOM from 'react-dom/client';
import InputCreateTodo from './component/Form/InputCreateTodo';
import Header from './component/Header/Header';
const App = () => {
    return (
        <div>
            <Header />
            <InputCreateTodo />
        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />)
