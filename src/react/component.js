import React from 'react'
import EventBus from '../event-bus'

class RootComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      eventCount: 0
    }

    EventBus.on('react-event', () => { this.setState({ eventCount: this.state.eventCount + 1 }) })
    window.setInterval(() => EventBus.emit('vue-event'), 3E3 + Math.random() + 10 * 11)
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