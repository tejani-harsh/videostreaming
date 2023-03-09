import React from 'react';
import './App.css';
import {CustomSelect} from './components/CustomSelect.js'
import { 
  FormControl,
  InputLabel,
  Select,
  MenuItem
 } from '@mui/material';
 import { useState } from 'react';
function App() {
  const [currentValue, setCurrentValue] = useState(1000)
  const list  = ['Movie1','Movie2']
    return (
    <div className="App">
      <header className="App-header">
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <div style={{
            margin: 'auto',
            display: 'block',
            width: 'fit-content'
        }}>
          <CustomSelect/>   
            <FormControl>
                {/* <InputLabel id="demo-simple-select-label">
                    Select Amount:
                </InputLabel> */}
                <Select
                    labelId="demo-simple-select-label"
                    value={currentValue}
                    style={{
                        width: 400,
                    }}
                    onChange={(e) => {
                        console.log("Current Value", e.target.value)
                        setCurrentValue(e.target.value)
                    }}
                >
                  {list.map((item,index) =>{
                    return(
                      <MenuItem key={index} value ={item}
                    >{item}</MenuItem>
                    )
                  })}
                </Select>         
                                                                              </FormControl>
          
        </div>


</FormControl>
      </header>
    </div>
  );
}

export default App;
