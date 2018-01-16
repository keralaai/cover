import React, { Component } from 'react'
import './Doing.css'

class Member extends Component {
  render() {
    return (
      <div className="Doing">
        {/* <img className="Doing-image" src={this.props.data.image} alt={this.props.data.name} /> */}
        <div className="Doing-detail">
          <div className="Doing-name">{this.props.data.name}</div>
          <div className="Doing-description">{this.props.data.description}</div>
        </div>
      </div>
    )
  }
}

export default Member
