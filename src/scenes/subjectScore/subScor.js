/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class SubScor extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params

    this.state = {
      ocena: '',
      pohadja_id: parseInt(id),
    }
  }

  componentDidMount() {
    const { getOcene } = this.props
    const { id } = this.props.match.params

    getOcene({ id })
  }

  onFieldChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: parseInt(value),
    })
  }

  oceni = () => {
    const { setOcene, showNotification } = this.props
    const { uid } = this.props.score

    const mutable = {
      ...this.state,
      uid,
    }

    setOcene(mutable).catch(() => {
      showNotification({
        type: 'error',
        message: 'Doslo je do greske prilikom unosa ocene',
      })
    })
  }

  renderInfo() {
    const { score } = this.props
    if (!score) return null

    return (
      <table className="styled ocene">
        <tbody>
          <tr>
            <td>Ucenik:</td>
            <td>{score.firstName} {score.lastName}</td>
          </tr>
          <tr>
            <td>Predmet:</td>
            <td>{score.predmet}</td>
          </tr>
          <tr>
            <td className="left-align" colSpan="2">
              {
                score.ocene.map((item, index) => {
                  return (
                    <span key={index}> {item} </span>
                  )
                })
              }
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-item">
                <input
                  value={this.state.ocena}
                  id="ocena"
                  type="text"
                  name="ocena"
                  placeholder="ocena"
                  onChange={this.onFieldChange}
                />
              </div>
            </td>
            <td>
              <button onClick={this.oceni}>Oceni</button>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <section>
        { this.renderInfo() }
      </section>
    )
  }
}

SubScor.propTypes = {
  score: PropTypes.object,
  getOcene: PropTypes.func,
  showNotification: PropTypes.func,
}

export default SubScor
