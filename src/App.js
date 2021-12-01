import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Home} from './container/home/home';
import {Photos} from './container/photos/photos';
import {Album} from './container/album/album';
import Login from './container/login/login';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';


function App() {
  return (
    <div className="App">
      <div className="header">
          <h1>
            Photo Album
          </h1>
        </div>
        {/* define routes for respective components */}
      <BrowserRouter>
      <Switch> 
        <Route exact path='/' component={Login}/>
        <Route exact path='/home/:userId' component={Home}/>
        <Route exact path='/admin/:userId' component={Album}/>
        <Route exact path='/photos/:albumId' component={Photos}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
