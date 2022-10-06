import { FC } from 'react';

import HttpRequestHandling from './tasks/HttpRequestHandling';
import CounterFunction from './tasks/CounterFunction';
import { Parent } from './tasks/PropsDrilling';
import { Parent1 } from './tasks/PassingDataToParentComponent';

import './App.css';

const App: FC = (): JSX.Element => {
   return (
      <div className="App">
         <HttpRequestHandling />
         <CounterFunction />
         {/* PropsDrilling */}
         <Parent />
         {/* PassingDataToParentComponent */}
         <Parent1 />
      </div>
   );
};

export default App;
