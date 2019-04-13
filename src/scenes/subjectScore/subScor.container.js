import { connect } from 'react-redux'

import {
  getOcene,
  setOcene,
} from '@/store/subject/action'

import { showNotification } from '@/store/notification/action'

import subScore from './subScor'

const mapStateToProps = (state) => {
  const { score } = state.store.dnevnik
  return {
    score,
  }
}

const matchDispatchToProps = {
  getOcene,
  setOcene,
  showNotification,
}

export default connect(mapStateToProps, matchDispatchToProps)(subScore)
