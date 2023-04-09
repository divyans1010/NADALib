import React from 'react'
import './App.css';
import SearchBar from './components/searchbar'
import { BasicTable } from './components/BasicTable'

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <BasicTable/>
    </div>
  )
}

export default App;
