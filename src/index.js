import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header/Header';
import InputTodo from './component/Form/InputTodo';
const App = () => {
    return (
        <div>
            <Header />
            <InputTodo />
        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />)
