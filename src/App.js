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
      likes: ['memes', 'code', 'community', 'develpment', 'AI'],
      typing: true, // kinda shady
      doings: [
        {
          name: 'Ask',
          description:
            'Got any doubts concerning ML or Deep Learning. Ask us. We are more than happy to answer any of your questions. Maybe add in more stuff here to make it look nicer',
          button: 'ASK',
        },
        {
          name: 'Trippledex',
          description: 'Repair of aneurysm of coronary vessel',
          button: 'Mauv',
        },
        {
          name: 'Andalax',
          description:
            'Insertion or replacement of single array rechargeable neurostimulator pulse generator',
          button: 'Red',
        },
      ],
      members: [
        {
          image: 'https://robohash.org/quaererumneque.jpg?size=100x100&set=set1',
          email: 'cpiper0@nsw.gov.au',
          github: 'cpiper0',
          twitter: 'cpiper0',
          facebook: 'cpiper0',
          name: 'Christopher Piper',
        },
        {
          image: 'https://robohash.org/ipsautiure.bmp?size=100x100&set=set1',
          email: 'bwhitehead1@rakuten.co.jp',
          github: 'bwhitehead1',
          twitter: 'bwhitehead1',
          facebook: 'bwhitehead1',
          name: 'Brittni Whitehead',
        },
        {
          image: 'https://robohash.org/liberosequiatque.jpg?size=100x100&set=set1',
          email: 'kaleksandrev2@list-manage.com',
          github: 'kaleksandrev2',
          twitter: 'kaleksandrev2',
          facebook: 'kaleksandrev2',
          name: 'Karin Aleksandrev',
        },
        {
          image: 'https://robohash.org/nisiipsaquae.png?size=100x100&set=set1',
          email: 'ccostelow3@opensource.org',
          github: 'ccostelow3',
          twitter: 'ccostelow3',
          facebook: 'ccostelow3',
          name: 'Coletta Costelow',
        },
        {
          image: 'https://robohash.org/ducimusculpaaspernatur.jpg?size=100x100&set=set1',
          email: 'kdoudny4@pbs.org',
          github: 'kdoudny4',
          twitter: 'kdoudny4',
          facebook: 'kdoudny4',
          name: 'Keenan Doudny',
        },
        {
          image: 'https://robohash.org/teneturquoest.jpg?size=100x100&set=set1',
          email: 'mmelmore5@rakuten.co.jp',
          github: 'mmelmore5',
          twitter: 'mmelmore5',
          facebook: 'mmelmore5',
          name: 'Moreen Melmore',
        },
        {
          image: 'https://robohash.org/temporibusfugitquibusdam.jpg?size=100x100&set=set1',
          email: 'eshuxsmith6@ovh.net',
          github: 'eshuxsmith6',
          twitter: 'eshuxsmith6',
          facebook: 'eshuxsmith6',
          name: 'Ethelind Shuxsmith',
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
                code
                <Typist.Delay ms={500} />
                <Typist.Backspace count={4} delay={500} />
                memes
                <Typist.Delay ms={500} />
                <Typist.Backspace count={5} delay={500} />
                development
                <Typist.Delay ms={500} />
                <Typist.Backspace count={7} delay={700} />
              </Typist>
            ) : (
              ''
            )}
          </div>
        </div>
        <div id="App-section-2">
          <h2 className="App-section-2-tagline">
            I have no <span className="App-2-tagline-highlight">idea</span> what I am{' '}
            <span className="App-2-tagline-highlight">doing</span> here. Please, somebody{' '}
            <span className="App-2-tagline-highlight">help</span> me as soon as you can. I{' '}
            <span className="App-2-tagline-highlight">really</span> mean it, somebody, anybody.
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
