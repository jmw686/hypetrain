import React, { Component } from 'react';
import './css/App.css';
import {
  BrowserRouter as Router,
  Route, 
  Redirect, 
  Switch, 
} from 'react-router-dom';
import NavLink from './components/NavLink';
import RGB from './components/RGB';
import HSL from './components/HSL';
// import Join from './components/Join';
// import About from './components/About';
import Home from './components/Home';
import Load from './components/Load';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({location}) => ( 
          <div style={styles.fill}>
            <Route 
              exact={true}
              path={'/'}
              render={() => (
                <Redirect to='/hsl/10/90/50' />
              )}
            />
            <ul style={styles.nav}>
              <NavLink to="/hsl/10/90/50">Red</NavLink>
              <NavLink to="/hsl/120/100/40">Green</NavLink>
              <NavLink to="/rgb/33/150/243">Blue</NavLink>
              <NavLink to="/rgb/240/98/146">Pink</NavLink>
              <NavLink to="/Home">Home</NavLink>
            </ul>
            <div style= {styles.content}>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={8000}
                  classNames='pageSlider'  
                >
                  <Switch
                    location={location}
                  >
                    <Route 
                      exact={true}
                      path={'/hsl/:h/:s/:l'}
                      component={HSL}
                    />

                    <Route 
                      exact={true}
                      path={'/rgb/:r/:g/:b'}
                      component={RGB}
                    />
                    <Route 
                      exact={true}
                      path={'/home'}
                      component={Home}
                    />
                    <Route 
                      render={() => <div> Not Found </div>}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <Load />
            </div>
          </div>
        )} />
    </Router>
    );
  }
}



let styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflowX: 'hidden'
}
styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}
styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex',
}






export default App;
