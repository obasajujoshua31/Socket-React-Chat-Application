import React from 'react';
import routes from './routes/routes'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {MyProvider} from './store/provider/Provider'
import ProtectedRoute from './routes/ProtectedRoute'
import './App.css';


class App extends React.Component {
  render(){
    return (
      <MyProvider>
        <Router>
          <Switch>
            {routes.default.map(({ exact, path, component }, index) => (
              <Route key={index} exact={exact} path={path} component={component} />
            ))}
            {routes.protected.map(({ exact, path, component }, index) => (
              <ProtectedRoute
                key={index}
                exact={exact}
                path={path}
                component={component}
              />
            ))}
              {
                routes.notFound.map(({ exact, path, component }, index) => (
                  <Route key={index} exact={exact} path={path} component={component} />
                ))
              }
            }
          </Switch>
        </Router>
      </MyProvider>
     
    );
  }
  
}

export default App;
