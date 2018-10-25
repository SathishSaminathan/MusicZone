import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Routers from "./config/route";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routers />
      </div>
    );
  }
}

export default App;
