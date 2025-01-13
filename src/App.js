
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import { Routes, Route } from 'react-router-dom';



export default class App extends Component {
  


  constructor() {
    super();

    this.state = {
      mode : "light",
    };
  }

  toggleMode =()=>{
    if(this.state.mode==="light")
    {
      this.setState({mode:"dark"});
      document.body.style.backgroundColor='#343d3f';
    }
    else
    {
    this.setState({mode:"light"});
    document.body.style.backgroundColor="white";
    }
  }

  render() {
    return (
      <>
        <Navbar toggleMode={this.toggleMode} mode={this.state.mode}/>
        
        
        <Routes>
          <Route exact path="/" element={<News key="general" mode={this.state.mode} pageSize={6} category="general"/>}/>
          <Route exact path="/business" element={<News key="business" mode={this.state.mode} pageSize={6} category="business"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" mode={this.state.mode} pageSize={6} category="entertainment"/>}/>
          <Route exact path="/general" element={<News key="general" mode={this.state.mode} pageSize={6} category="general"/>}/>
          <Route exact path="/health" element={<News key="health" mode={this.state.mode} pageSize={6} category="health"/>}/>
          <Route exact path="/science" element={<News key="science" mode={this.state.mode} pageSize={6} category="science"/>}/>
          <Route exact path="/sports" element={<News key="sports" mode={this.state.mode} pageSize={6} category="sports"/>}/>
          <Route exact path="/technology" element={<News key="technology" mode={this.state.mode} pageSize={6} category="technology"/>}/>
        </Routes>
          {/* Exact is used to avoid partial matching by react router */}
      </>
    )
  }
}
