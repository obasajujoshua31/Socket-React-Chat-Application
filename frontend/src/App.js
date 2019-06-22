import React from 'react';
import routes from './routes/routes'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css';


class App extends React.Component {
  render(){
    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (
      <Router>
        {routeComponents}
      </Router>
    );
  }
  
}

export default App;
