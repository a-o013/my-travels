import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
        destination="Havana"
        pays="Cuba"
        distance="At 7600 km from Belgium !"
        image="https://2.bp.blogspot.com/-zvTPcKcm-74/WQNqDlnqukI/AAAAAAAAJlQ/eNQRJNnt_Yode6It4m6mHuSjFzTWPoWMACLcB/s640/Cuba%2B-%2BPoracci%2BIn%2BViaggio%2B-%2B640p%2B-%2B11x14.jpg"
        />

        <Travel
        destination="kyoto"
        pays="Japan"
        distance="At 9300 km from Belgium !"
        image="https://fastjapan.com/en/wp-content/uploads/2016/10/pixta_13290561_M-1.jpg"
        /> 
      </div>
    );
  }
}

export default App;