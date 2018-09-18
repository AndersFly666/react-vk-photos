import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import { store } from './store/configureStore'
import './styles/app.css'

ReactDOM.render(
  <Provider store={store}>
    <div className="app">
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
