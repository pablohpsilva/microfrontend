import React from 'react'
import Event from '../event'

class RootComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      eventCount: 0
    }

    Event.on('react::event', () => { this.setState({ eventCount: this.state.eventCount + 1 }) })
    window.setInterval(() => Event.emit('vue::event'), 3E3 + Math.random() + 10 * 11)
  }

  render () {
    return (
      <div>
        Hello! I'm a React app
      {this.state.eventCount}
      </div>
    )
  }
}

export default RootComponent