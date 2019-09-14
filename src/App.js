import React from 'react';
import  {GamePage} from './Components/GamePage'
import { Tabs, Tab } from 'react-materialize';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Tabs className="tab-demo z-depth-1" >
              <Tab title="AUTOMAT">
                  <GamePage/>
              </Tab>
              <Tab title="SČÍTAČKA">
                  TODO
              </Tab>
          </Tabs>


      </header>
    </div>
  );
}

export default App;
