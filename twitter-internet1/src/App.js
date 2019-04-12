import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Login from './components/pages/Login/Login'
import Home from './components/pages/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import UserCrud from './components/pages/Form/Form'

import './App.css';


const theme = createMuiTheme({

  palette: {
    primary: {
      main: '#1da1f2'
    },
    secondary: {
      main: '#10171e'
    }
  }

})

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/user' exact component={UserCrud} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
