import Detail from './views/Detail';
import Home from './views/Home';
import Search from './views/Search';
import React, { Component } from 'react'
import './_app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page404 from './views/Page404';

class App extends Component {
  render(){
    return (
      <Router>
        <React.Fragment>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path={"/search/q=:query"} component={Search}/>
              <Route exact path={"/hotel/detail/:id"} component={Detail}/>
              <Route exact path="*" component={Page404}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
