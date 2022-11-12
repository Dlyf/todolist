import React from 'react-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const InputTodo = () => {
    return (
        <div>
            <Box
                component="form"
                sx={{ '& button': { m: 1 } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Add a Task" variant="outlined" />
                <Button variant="outlined" size="small">
                    Add
                </Button>
            </Box>
        </div>
    )
}

export default InputTodo;