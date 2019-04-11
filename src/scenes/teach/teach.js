/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'


class Teach extends Component {
  componentDidMount() {
    const { getSubject } = this.props
    getSubject()
  }

  renderSubject() {
    const { subject } = this.props

    return subject.map((item, index) => {
      return (
        <div key={index}>
          <ul>
            <li>{item.firstName}</li>
            <li>{item.lastName}</li>
            <li>{item.name}</li>
          </ul>
        </div>
      )
    })
  }

  render() {
      return (
        <section>
          <div>
            { this.renderSubject() }
          </div>
        </section>
      )
  }
}

Teach.propTypes = {
  subject: PropTypes.array,
  getSubject: PropTypes.func,
}

Teach.defaultProps = {

}

export default Teach

