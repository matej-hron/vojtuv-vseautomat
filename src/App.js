import React from 'react';
import  {AutomatGamePage} from './Components/Automat/AutomatGamePage'
import  {ScitaniGamePage} from './Components/Scitani/ScitaniGamePage'
import { Tabs, Tab } from 'react-materialize';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Tabs className="tab-demo z-depth-1" >
              <Tab title="AUTOMAT">
                  <AutomatGamePage/>
              </Tab>
              <Tab title="SČÍTAČKA">
                  <ScitaniGamePage/>
              </Tab>
          </Tabs>


      </header>
    </div>
  );
}

export default App;
