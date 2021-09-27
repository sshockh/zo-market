import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Management from './Management/Management';
import Store from './Store/Store';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/admin' component={Management} />
        <Route exact path='/' component={Store} />
      </div>
    </BrowserRouter>
  );
}

export default App;
