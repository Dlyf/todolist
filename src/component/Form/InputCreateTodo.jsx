import React from 'react-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

const InputCreateTodo = () => {
    const [task, setTask] = useState(null);
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
            `${API_URL}/5ddccf7d6b55da001759722f`,
            config
            )
            .then(res=> {
                setTask(res.data)
            })
            .catch(err=> console.log(err))
    }, []);

    function createTask(){
        axios
            .post(`https://api-nodejs-todolist.herokuapp.com/5ddccf7d6b55da001759722f`)
            .then((response) => {
                setTask(response.data);
            });
    }
    
    return (
        <div>
            <Box
                component="form"
                sx={{ '& button': { m: 1 } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" name="nameTask"  label="Add a Task" variant="outlined" />
                <Button onclick={createTask} variant="outlined" size="small">
                    Add
                </Button>
            </Box>
        </div>
    )
}

export default InputCreateTodo;