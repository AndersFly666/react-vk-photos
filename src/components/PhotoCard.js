import React from 'react'

export class PhotoCard extends React.Component {
  render() {
    const { photo } = this.props
    return (
      <div className="ib photo">
        <img src={photo.url} alt="" />
        <p>{photo.likes} ❤</p>
      </div>
    )
  }
}
