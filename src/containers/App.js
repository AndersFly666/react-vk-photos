import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import * as pageActions from '../actions/PageActions'
import * as userActions from '../actions/UserActions'

class App extends Component {
  getUserPhotos = year => {
    const { getPhotos } = this.props.pageActions
    const userId = this.props.user.user ? this.props.user.user.id : null
    getPhotos(year, userId)
  }

  render() {
    const { user, page } = this.props

    const { handleLogin } = this.props.userActions
    const username = user.user
      ? `${user.user.first_name} ${user.user.last_name}`
      : ''
    return (
      <div className="row">
        <Page
          year={page.year}
          photos={page.photos}
          error={page.error}
          isFetching={page.isFetching}
          getPhotos={this.getUserPhotos}
        />
        <User
          name={username}
          handleLogin={handleLogin}
          isFetching={user.isFetching}
          error={user.error}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
