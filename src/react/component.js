import React from 'react'
import EventBus from '../event-bus'

class RootComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      eventName: ''
    }

    EventBus.on('react-event', () => {
      this.setState({
        eventName: 'react-event'
      })

      window.setTimeout(() => this.setState({ eventName: '' }), 1500)
    })

    const interval = 3E3 + Math.random() + 10 * 11
    window.setInterval(() => {
      EventBus.emit('vue-event')
      console.log(`react emitted 'vue-event' event`)
    }, interval)
  }

  render () {
    return (
      <div>
        Hello! I'm a React app
        {
            this.state.eventName
          ? <div>
              <h6>
                {this.state.eventName}'s event received!
              </h6>
            </div>
          : null
        }
      </div>
    )
  }
}

export default RootComponent