import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import RoomPage from './pages/room/RoomPage';
import SingleRoom from './pages/singleRoom/SingleRoom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route
            path="/rooms"
            exact
            component={RoomPage}
          />
          <Route
            path="/singlerooms/:room"
            exact
            component={SingleRoom}
          />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
