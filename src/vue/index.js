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
        <span>
          some
          vue::event counter: {{ eventCount }}
        </span>
      </div>
    `,
    data () {
      return {
        eventCount: 0
      }
    },
    mounted() {
      EventBus.on('vue-event', () => { this.eventCount += 1 })
      window.setInterval(() => EventBus.emit('react-event'), 3E3 + Math.random() * 10)
    }
  }
})