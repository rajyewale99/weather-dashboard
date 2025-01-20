import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';
function App() {
  let handleclick = ()=>{
    console.log("button was click");
  };
  return(
  <>
    {/* <h1>Material UI Demo</h1>
    <Button variant="outlined" onClick={handleclick}>Click Me!</Button> */}
    <WeatherApp/>
    {/* {<SearchBox/>}
    <InfoBox/> */}
  </>
  );
}

export default App
