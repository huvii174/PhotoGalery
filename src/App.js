import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Navbar from './components/Navbar'
import Photos from './components/Photos'
import Progress from './components/Progress'
import Upload from  './components/Upload'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/upload" component={Upload}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
