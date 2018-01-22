import React from 'react'
import ReactDOM from 'react-dom'
import singleReact from 'single-spa-react'
import rootComponent from './component'

export default singleReact({
  React,
  ReactDOM,
  rootComponent,
  domElementGetter: () => document.getElementById('reactapp')
})
