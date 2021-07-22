import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div style={{ width: '550px', margin: 'auto'}}>
        <h1> Simple App using Github Actions </h1>
      </div>
    )
  }
}

export default App;