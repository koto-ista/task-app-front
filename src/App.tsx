import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Base from './pages/Base';
import Home from './pages/Home/Home';
import TaskAdd from './pages/Tasks/TaskAdd';
import TaskDetail from './pages/Tasks/TaskDetail';
import Header from './pages/Header';

function App() {
  return (
    <div className="App">
      <main className="main-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TaskAdd />} />
        <Route path="/detail/:taskId" element={<TaskDetail />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
