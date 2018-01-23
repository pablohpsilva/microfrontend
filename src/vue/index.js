import Vue from 'vue'
import EventBus from '../event-bus'
import singleVue from 'single-spa-vue'

export default singleVue({
  Vue,
  appOptions: {
    el: '#vueapp',
    template: `
      <div>
        Hello! I'm a Vue app
        <h6
          v-show="eventName">
          {{ eventName }}'s event received!
        </h6>
      </div>
    `,
    data () {
      return {
        eventName: ''
      }
    },
    mounted() {
      EventBus.on('vue-event', () => {
        this.eventName = 'vue-event'

        window.setTimeout(() => { this.eventName = '' }, 1500)
      })
      
      const interval = 3E3 + Math.random() * 10
      window.setInterval(() => {
        EventBus.emit('react-event')
        console.log(`vue emitted 'react-event' event`)
      }, interval)
    }
  }
})