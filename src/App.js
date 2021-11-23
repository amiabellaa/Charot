import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"

import './App.css';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <div className="App">
      <ToastContainer position="top-center"/>
  <Switch>
    <Route exact path = "/" component={Home}/>
    <Route path="/add" component={AddEdit}/>
    <Route path="/update/:id" component={AddEdit}/>
    <Route path="/view/:id" component={View}/>
    <Route path="*"><NotFound/></Route>
  </Switch>
    </div>
    </BrowserRouter>
  );
}


export default App;