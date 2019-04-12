import { connect } from 'react-redux'

import subScore from './subScor'

const mapStateToProps = (state) => {
  const { score } = state.store.dnevnik
  return {
    score,
  }
}

const matchDispatchToProps = {}

export default connect(mapStateToProps, matchDispatchToProps)(subScore)
