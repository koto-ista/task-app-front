import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import TaskAdd from './pages/Tasks/TaskAdd';
import TaskDetail from './pages/Tasks/TaskDetail';
import Header from './pages/Header';
import Base from './pages/Base';

function App() {
  return (
    <div className="App">
      <main className="main-wrapper">
      <Base />
      </main>
    </div>
  );
}

export default App;
