import { Route } from 'react-router-dom';
import './App.css';
import Management from './components/Management/Management';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Route exact path='/manage' component={Management} />
      <Route exact path='' component={Shop} />
    </div>
  );
}

export default App;
