
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Contacto from './Containers/Contacto/Contacto';

function App() {
  return (
    <div className="App">

      <BrowserRouter>


      
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/contact" exact component={Contacto}/>


        </Switch>
      


      </BrowserRouter>
        
    </div>
  );
}

export default App;
