import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Management from './components/Management/Management';
import Store from './components/Store/Store';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/manage' component={Management} />
        <Route exact path='/' component={Store} />
      </div>
    </BrowserRouter>
  );
}

export default App;
