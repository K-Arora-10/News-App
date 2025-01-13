import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
        <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
  }
}
