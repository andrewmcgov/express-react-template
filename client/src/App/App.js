import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => {
        console.error(`Error reaching the API: ${err}`);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>
          <code>express-react-template</code>
        </h1>
      </div>
    );
  }
}

export default App;
