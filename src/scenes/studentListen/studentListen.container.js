/* eslint-disable */
import { connect } from 'react-redux'

import { getListen } from '@/store/subject/action'

import studentListen from './stundetListen'

const mapStateToProps = (state) => {
  const { listen } = state.store.dnevnik
  return {
    listen
  }
}

const matchDispatchToProps = {
  getListen,
}

export default connect(mapStateToProps, matchDispatchToProps)(studentListen)
