import React from 'react-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState} from 'react';
import axios from 'axios';
import Task from '../Task';

const InputCreateTodo = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const API_URL = `https://api-nodejs-todolist.herokuapp.com/`;
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY`
        const config = {
            headers: { 
                Authorization: `Bearer ${token}`,
                "Content-Type": `application/json` }
        }

        axios
            .get(
            `${API_URL}`,
            config
            )
            .catch(err=> console.log(err))
    }, []);

    const handleChange = (event) => {
        // event.preventDefault();
        setNewTask(event.target.value);
    };

    const addTask = () => {
        setTodoList(...todoList, newTask);
    };

    const deleteTask = (taskName) => {
        const newTodoList = todoList.filter((task) => {
            if (task === taskName) {
                return false;
            } else {
                return true;
            }
        });
        setTodoList(newTodoList)
    }
    
    return (
        <div>
            <Box
                component="form"
                sx={{ '& button': { m: 1 } }}
                noValidate
                autoComplete="off"
            >
                <TextField onChange={handleChange} id="outlined-basic" name="task"  label="Add a Task" variant="outlined" />
                <Button onClick={addTask} variant="outlined" size="small">
                    Add
                </Button>
                <div className="list">
                {todoList.map((task) => {
                    return (
                        
                    <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} />
                    )
                })}
                </div>
            </Box>
        </div>
    )
}

export default InputCreateTodo;