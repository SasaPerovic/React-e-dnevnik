/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class SubScor extends Component {
  render() {
    const { scores } = this.props
    console.log('prop', this.props)
    return (
      <section>
        <ul>
          <h1>test</h1>
        </ul>
      </section>
    )
  }
}

SubScor.propTypes = {
  scores: PropTypes.object,
}

SubScor.defaultProps = {

}

export default SubScor
