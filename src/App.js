import logo from './logo.svg';
import './App.css';
import React from "react";
import "./styles.css";
import Search from "./Search";

    export default function App() {
  return (
    <div className="App">
      <a href="https://www.npmjs.com/package/react-animated-weather"></a>
      <h1>Weather Search Engine</h1>
      <br />
      <Search />
    </div>
  );
}

