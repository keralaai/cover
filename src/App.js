import React, { Component } from 'react'
import './App.css'

import Typist from 'react-typist'
import '../node_modules/react-typist/dist/Typist.css'

import Member from './components/Member/Member'
import Doing from './components/Doing/Doing'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      likes: ['talks', 'workshops', 'conferences', 'hackathons', 'cool projects'],
      typing: true, // kinda shady
      doings: [
        {
          name: 'Ask',
          description: `So you want to know the feasibility of a project before you start? Is the data you have good enough?
              Or you have already started and need help? We got you.`,
          button: 'Ask us',
          link: 'https://keralaai.in',
        },
        {
          name: 'Find Speakers',
          description:
            'Hosting a machine learning conference at your campus? We can help you find speakers.',
          button: 'Hellooo',
          link: 'https://keralaai.in',
        },
        {
          name: 'Project Sponsorships',
          description:
            'Think you are on to something? Show us what you are working on. Expert mentorship and funding for the coolest of the coolest.',
          button: '$$$',
          link: 'https://keralaai.in',
        },
      ],
      members: [
        {
          timestamp: '2018/01/15 5:37:20 PM GMT+5:30',
          name: 'Gopikrishnan Sasikumar',
          email: 'gopikrishnans1996@gmail.com',
          github: 'GopikrishnanSasikumar',
          twitter: 'gopidotai',
          facebook: 'Gopikrishnan Sasikumar',
          photo:
            '/photos/IMG_20171127_014318_652 - gopi krishnan.jpg',
        },
        {
          timestamp: '2018/01/15 6:03:19 PM GMT+5:30',
          name: 'Niyas Mohammed',
          email: 'niaz.angels@gmail.com',
          github: 'niazangels',
          twitter: 'niazangels',
          facebook: 'niazangels',
          photo:
            '/photos/niazangels - Niyas Mohammed.jpg',
        },
        {
          timestamp: '2018/01/17 9:48:55 PM GMT+5:30',
          name: 'Praveen Sridhar',
          email: 'prvn431@gmail.com',
          github: 'psbots',
          twitter: 'psbots',
          facebook: '',
          photo:
            '/photos/IMG_20170910_143601 - Praveen Sridhar.jpg',
        },
      ],
    }

    this.typingDone = this.typingDone.bind(this)
  }

  typingDone = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <span>KERALA AI INITIATIVE</span>
        </div>
        <div id="App-section-1">
          <div className="App-section-1-content">
            <span>We love </span>
            {this.state.typing ? (
              <Typist onTypingDone={this.typingDone}>
                talks
                <Typist.Delay ms={500} />
                <Typist.Backspace count={5} delay={500} />
                workshops
                <Typist.Delay ms={500} />
                <Typist.Backspace count={9} delay={500} />
                conferences
                <Typist.Delay ms={500} />
                <Typist.Backspace count={11} delay={500} />
                hackathons
                <Typist.Delay ms={500} />
                <Typist.Backspace count={10} delay={500} />
                cool projects
                <Typist.Delay ms={500} />
                <Typist.Backspace count={13} delay={700} />
              </Typist>
            ) : (
              ''
            )}
          </div>
        </div>
        <div id="App-section-2">
          <h2 className="App-section-2-tagline">
            We are an <span className="App-2-tagline-highlight">open community</span> dedicated to
            advancing <span className="App-2-tagline-highlight">AI research</span> in{' '}
            <span className="App-2-tagline-highlight">Kerala</span> by bringing together academics,
            researchers and industry experts alike.
          </h2>
        </div>
        <div id="App-section-3">
          {this.state.doings.map((doing, i) => <Doing key={i} data={doing} />)}
        </div>
        <div id="App-section-4">
          <div className="App-section-header">MEMBERS</div>
          {this.state.members.map((member, i) => <Member key={i} data={member} />)}
        </div>
        <div id="App-section-5">Copyright Keralaai 2018</div>
      </div>
    )
  }
}

export default App
