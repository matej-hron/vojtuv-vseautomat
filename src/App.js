import React from 'react';
import  {AutomatGamePage} from './Components/Automat/AutomatGamePage'
import  {AlgebraGamePage} from './Components/Scitani/AlgebraGamePage'
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
                      <AlgebraGamePage
                          createExpression={r => `${r.a} + ${r.b} = ${r.answer}`}
                          createTaskExpression={(a, b) => `${a} + ${b}`}
                          evaluateAnswer={(a, b, answer) => a + b === answer}
                          maxA={50}
                          maxB={50}
                         />
              </Tab>
              <Tab title="NÁSOBILKA">
                  <AlgebraGamePage
                      createExpression={r => `${r.a} * ${r.b} = ${r.answer}`}
                      createTaskExpression={(a, b) => `${a} * ${b}`}
                      evaluateAnswer={(a, b, answer) => a * b === answer}
                      maxA={10}
                      maxB={10}
                  />
              </Tab>

          </Tabs>


      </header>
    </div>
  );
}

export default App;
