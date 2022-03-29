import React from 'react';
import { Stack, Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>0</h1>
        <Stack spacing={2} direction='column'>

        <Button variant ='contained' color='primary'>Deposit</Button>
        <Button variant ='text' color='secondary'>Withdraw</Button>
        <Button variant ='outlined' color ='warning'>Bankrupt</Button>
        </Stack>
    </div>
  );
}

export default App;
