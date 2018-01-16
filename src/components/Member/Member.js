import React, { Component } from 'react'
import './Member.css'

import { Icon } from 'react-fa'

class Member extends Component {
  render() {
    return (
      <div className="Member">
        <img className="Member-image" src={this.props.data.image} alt={this.props.data.name} />
        <div className="Member-detail">
          <div className="Member-name">{this.props.data.name}</div>
          <div className="Member-platforms">
            <div className="Memeber-platform-github">
              <a href={'https://github.com/' + this.props.data.github}>
                <Icon name="github" />
              </a>
            </div>
            <div className="Memeber-platform-facebook">
              <a href={'https://www.facebook.com/' + this.props.data.facebook}>
                <Icon name="facebook" />
              </a>
            </div>
            <div className="Memeber-platform-twitter">
              <a href={'https://twitter.com/' + this.props.data.twitter}>
                <Icon name="twitter" />
              </a>
            </div>
            <div className="Memeber-platform-email">
              <a href={'mailto:' + this.props.data.email}>
                <Icon name="envelope" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Member
