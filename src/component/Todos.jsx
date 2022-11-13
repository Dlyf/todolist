import React, {useEffect, useState} from "react";
import axios from "axios";
import InputCreateTodo from "./Form/InputCreateTodo";
// import TodoList from "./TodoList";
const Todos = () => {
    // const [todos, setTodos] = useState(null);
    const [task, setTask] = useState(null);
    useEffect(() => {
        // const API_URL = `https://api-nodejs-todolist.herokuapp.com/`;
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY`
        const config = {
            headers: { 
                Authorization: `Bearer ${token}`,
                "Content-Type": `application/json` }
        }

        axios
            .get(
            `https://api-nodejs-todolist.herokuapp.com/`,
            config
            )
            .then(res=> {
                setTask(res.data)
            })
            .catch(err=> console.log(err))
    }, []);

    if (!task) return null;

    return (
        // <div>{todos ? <TodoList /> : "...loading"}</div>
        <div><InputCreateTodo/>
        <h3>{task}</h3>
        </div>
        // todos.map(todo => (
        //     <div>
                
        //     </div>
        // ))
    )
};

export default Todos