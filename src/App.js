import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import CreateCollection from './components/projects/CreateCollection'
import AddFavorite from './components/projects/AddFavorites'
import SendEmail from './components/projects/SendEmail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/restaurant-frontend-gene'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/addfavorite/:id' component={AddFavorite} />
            <Route path='/create' component={CreateCollection} />
            <Route path='/Send-email/:userid' component={SendEmail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;