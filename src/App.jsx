import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Autocomplete, TextField, Button, Checkbox, CircularProgress } from '@mui/material';

import List from './List';
function App() {
  const [count, setCount] = useState(0)
  const [selectedCity, setSelectedCity] = useState(undefined)
  const [isVisible, setIsVisible] = useState(false)
  const cities = [
    { id: 1, label: "elad" },
    { id: 3, label: "bb" },
    { id: 4, label: "bat yam" },

  ]
  return (
    <>
      {isVisible && <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>}
      < Autocomplete onChange={(event, newValue) => {
        setSelectedCity(newValue);
      }} renderInput={(params) => <TextField {...params} label="city" />} options={cities} />
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Checkbox onChange={(e) => { setIsVisible(e.target.checked) }} />
      <List />
      {selectedCity?.label}
      <CircularProgress variant="determinate"  value={count}/>
    </>
  )
}

export default App
