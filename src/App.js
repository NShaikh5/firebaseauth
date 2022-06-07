import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button, Input } from '@material-ui/core';
import AppRouter from './config/router/router';

function App() {
  return (
    <div className="App" >

      <AppRouter />
     {/* <Input placeholder='Enter Email Address' />  <br />
     <Input placeholder='Enter Password' />  <br />
     <Button variant='filled' >login </Button> <br />
      */}
    </div>
  );
}

export default App;
