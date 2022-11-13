import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header/Header';
import Todos from './component/Todos';
const App = () => {
    return (
        <div>
            <Header />
            <Todos />
        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />)
