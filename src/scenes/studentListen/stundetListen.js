/* eslint-disable */
import PropTypes from 'prop-types'
import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import routes from '@/const/router';

import { reformatUrl } from '@/utils/reformat'

class StudentListen extends Component {
  constructor () {
    super()
  }

  componentDidMount() {
    const { getListen } = this.props
    const { id } = this.props.match.params

    getListen({ id })
  }


  render() {
    const { listen } = this.props
      return (
      <table className="styled">
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>predmet</th>
            <th>detalji</th>
          </tr>
        </thead>
        <tbody>
        {
          listen.map(student, index => {
            return (
              <tr key={index}>
                <td>
                  {student.firstName}
                </td>
                <td>
                  {student.lastName}
                </td>
                <td>
                  {student.predmet}
                </td>
                <td>
                  <Link to={reformatUrl(`${routes.SCORE}/${student.pohadjaId}`)}>Ocene</Link>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
  }
}

StudentListen.propTypes = {
  listen: PropTypes.array,
  getListen: PropTypes.func,
}

StudentListen.defaultProps = {

}

export default StudentListen
