
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import { Routes, Route } from 'react-router-dom';



export default class App extends Component {
  


  constructor() {
    super();

    this.state = {
      mode : "light",
      progress:0
    };
  }

  setProgress = (prog)=>{
    this.setState({
      progress:prog
    })
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
        
        <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={<News progress={this.setProgress} key="general" mode={this.state.mode} pageSize={6} category="general"/>}/>
          <Route exact path="/business" element={<News progress={this.setProgress} key="business" mode={this.state.mode} pageSize={6} category="business"/>}/>
          <Route exact path="/entertainment" element={<News progress={this.setProgress} key="entertainment" mode={this.state.mode} pageSize={6} category="entertainment"/>}/>
          <Route exact path="/general" element={<News progress={this.setProgress} key="general" mode={this.state.mode} pageSize={6} category="general"/>}/>
          <Route exact path="/health" element={<News progress={this.setProgress} key="health" mode={this.state.mode} pageSize={6} category="health"/>}/>
          <Route exact path="/science" element={<News progress={this.setProgress} key="science" mode={this.state.mode} pageSize={6} category="science"/>}/>
          <Route exact path="/sports" element={<News progress={this.setProgress} key="sports" mode={this.state.mode} pageSize={6} category="sports"/>}/>
          <Route exact path="/technology" element={<News progress={this.setProgress} key="technology" mode={this.state.mode} pageSize={6} category="technology"/>}/>
        </Routes>
          {/* Exact is used to avoid partial matching by react router */}
      </>
    )
  }
}
