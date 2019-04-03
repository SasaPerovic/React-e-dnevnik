/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
  constructor () {
    super()
  }

  render() {
    return (
     <div className="footerMeni">
       <h4>e-dnevnik</h4>
       <h4>made by sasans87@gmail</h4>
     </div>
    )
  }
}

Footer.propTypes = {

}

Footer.defaultProps = {

}

export default Footer
