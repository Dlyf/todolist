import React from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
const AddTask = () => {
    const [description, setDescription] = useState('');

    let data = JSON.stringify({
        "description": "reading book"
      });
    const client = axios.create({
        baseURL: 'https://api-nodejs-todolist.herokuapp.com/task',
    });
    let config = {
    method: 'post',
    url: 'https://api-nodejs-todolist.herokuapp.com/task',
    headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY', 
        'Content-Type': 'application/json'
    },
    data : data
    };
    
    const task = { description: 'Valider une alternance'}
    axios(config, task)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(description)
    }

    const addPosts = (description) => {
        try {
            let res = client.post('', {
                description: description
            });
            setDescription(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>All post</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                >
                    <TextField value={description} onChange={(e) => setDescription(e.target.value)} id="outlined-basic" label="Add a new task" variant="outlined" />
                    <Button type="submit" variant="contained" size="small">Add Task</Button>
            </Box>
        </div>
    )
};

export default AddTask;