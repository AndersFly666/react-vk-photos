import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching, handleLogin } = this.props
    if (error) {
      return <p>Request error, reload page.</p>
    }

    if (isFetching) {
      return <p>Loading...</p>
    }

    if (name) {
      return <p>Hello, {name}</p>
    }

    return (
      <button className="btn" onClick={handleLogin}>
        Login
      </button>
    )
  }

  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
}
