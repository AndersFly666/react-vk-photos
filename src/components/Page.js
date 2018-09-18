import React from 'react'
import PropTypes from 'prop-types'
import { PhotoCard } from './PhotoCard'

export class Page extends React.Component {
  onYearBtnClick = e => {
    this.props.getPhotos(+e.currentTarget.innerText)
  }

  renderPhotos() {
    if (this.props.photos.length) {
      return this.props.photos.map(photo => (
        <PhotoCard key={photo.id} photo={photo} />
      ))
    }
  }

  render() {
    const { year, photos, isFetching, error } = this.props
    return (
      <div className="ib page">
        <p>
          <button className="btn" onClick={this.onYearBtnClick}>
            2018
          </button>{' '}
          <button className="btn" onClick={this.onYearBtnClick}>
            2017
          </button>{' '}
          <button className="btn" onClick={this.onYearBtnClick}>
            2016
          </button>{' '}
          <button className="btn" onClick={this.onYearBtnClick}>
            2015
          </button>{' '}
          <button className="btn" onClick={this.onYearBtnClick}>
            2014
          </button>{' '}
          <button className="btn" onClick={this.onYearBtnClick}>
            2013
          </button>
        </p>
        <h3>{year} year.</h3>
        {!isFetching &&
          error && <p>Error on load your photos, please try again</p>}
        {isFetching && !error ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>You have {photos.length} photos.</p>
            {this.renderPhotos()}
          </div>
        )}
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
}
