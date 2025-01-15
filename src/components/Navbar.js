import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  
  constructor() {
    super();

    this.state = {
      home:true,
      business:false,
      entertainment:false,
      general:false,
      health:false,
      science:false,
      sports:false,
      technology:false,
    };
  }

  highlight=(high)=>{
    this.setState({
      home:false,
      business:false,
      entertainment:false,
      general:false,
      health:false,
      science:false,
      sports:false,
      technology:false,
      [high]:true
    })
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={this.props.mode}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">NewsMonkey</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link onClick={() =>this.highlight('home')} className={`nav-link ${this.state.home?"active":""}`} aria-current="page" to="/">Home</Link>
                </li>
                {/* <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
                </li> */}
                <li className="nav-item"><Link onClick={() =>this.highlight('business')} className={`nav-link ${this.state.business?"active":""}`} to="/business">Business</Link></li>
                <li className="nav-item"><Link onClick={() =>this.highlight('entertainment')} className={`nav-link ${this.state.entertainment?"active":""}`} to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link onClick={() =>this.highlight('general')} className={`nav-link ${this.state.general?"active":""}`} to="/general">General</Link></li>
                <li className="nav-item"><Link onClick={() =>this.highlight('health')} className={`nav-link ${this.state.health?"active":""}`} to="/health">Health</Link></li>
                <li className="nav-item"><Link onClick={() =>this.highlight('science')} className={`nav-link ${this.state.science?"active":""}`} to="/science">Science</Link></li>
                <li className="nav-item"><Link onClick={() =>this.highlight('sports')} className={`nav-link ${this.state.sports?"active":""}`} to="/sports">Sports</Link></li>
                <li className="nav-item"><Link onClick={() =>this.highlight('technology')} className={`nav-link ${this.state.technology?"active":""}`} to="/technology">Technology</Link></li>
              
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={this.props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${this.props.mode==="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            </div>
        </div>
        </nav>
      </>
    )
  }
}
