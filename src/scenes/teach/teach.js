/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import routes from '@/const/router';
import { reformatUrl } from '@/utils/reformat'

class Teach extends Component {
  componentDidMount() {
    const { getSubject } = this.props
    getSubject()
  }

  renderSubject() {
    const { subject } = this.props

    return subject.map((item, index) => {
      return (
        <div className="list"  key={index}>
          <ul className="list-ul">
            <li>{item.firstName}</li>
            <li>{item.lastName}</li>
            <li>{item.name}</li>
            <li>
              <Link to={reformatUrl(`${routes.STUDENT_LISTEN}/${item.id}`)}>Studenti</Link>
            </li>
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

