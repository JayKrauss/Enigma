import React, { Component } from 'react';
import huey from './images/huey.gif';
import up from './images/arrow.png';
import down from './images/arrowdown.png';
import fire from './images/fire.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className="sliding-background">
          </div>
          <img id='pc' src={huey} alt='heli'/>
          <div id='controls' className='controls'>
          <img id='uparrow' src={up} alt='up' /> <img id='downarrow' src={down} alt='down' /> <img id='firebutton' src={fire} alt='fire' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
