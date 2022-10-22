import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

let JoinRoom = () => {
    let handleChange = () => {
        console.log("test");
    }
    return (
        <div className='joinRoom'>
            <div className='joinRoom__container'>
                <FormControl fullWidth className='joinRoom__formControl'>
                    <TextField id="outlined-basic" label="Username" variant="outlined" />
                </FormControl>
                <FormControl fullWidth className='joinRoom__formControl'>
                    <InputLabel id="demo-simple-select-label">Select Room</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={2}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Room One</MenuItem>
                        <MenuItem value={2}>Room Two</MenuItem>
                        <MenuItem value={3}>Room Three</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <h1>Join Room</h1>
        </div>
    );
}

export default JoinRoom