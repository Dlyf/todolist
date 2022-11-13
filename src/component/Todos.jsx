import React from "react";
import axios from "axios";
// import InputCreateTodo from "./Form/InputCreateTodo";

// import TodoList from "./TodoList";
const Todos = () => {
    // const [todos, setTodos] = useState(null);
    // const [task, setTask] = useState(null);
    
        let data = JSON.stringify({
            "description": "reading book"
        });

        // const API_URL = `https://api-nodejs-todolist.herokuapp.com/`;
        // const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY`
        let config = {
            method: 'get',
            url: 'https://api-nodejs-todolist.herokuapp.com/',
            headers: { 
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY', 
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

    // if (!task) return null;

    return (
        // <div>{todos ? <TodoList /> : "...loading"}</div>
        <div>
            <h2>All post</h2>
        </div>
        // todos.map(todo => (
        //     <div>
                
        //     </div>
        // ))
    )
};

export default Todos