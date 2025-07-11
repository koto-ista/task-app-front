import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Base from './pages/Base';
import Home from './pages/Home/Home';
import TaskAdd from './pages/Tasks/TaskAdd';
import TaskDetail from './pages/Tasks/TaskDetail';

function App() {
  return (
    <div className="App">
      <Base></Base>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TaskAdd />} />
        <Route path="/detail/:taskId" element={<TaskDetail />} />
      </Routes>
    </div>
  );
}

export default App;
