/* eslint-disable */
import PropTypes from 'prop-types'
import React, {Component, Fragment} from 'react'

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
          listen.map(student => {
            return (
              <tr key={student.uid}>
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
                  details
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
