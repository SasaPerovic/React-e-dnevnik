import { connect } from 'react-redux'

import teach from './teach'
import { getSubject } from '@/store/subject/action'

const mapStateToProps = (state) => {
  const { subject } = state.store.dnevnik
  return {
    subject,
  }
}

const matchDispatchToProps = {
  getSubject,
}

export default connect(mapStateToProps, matchDispatchToProps)(teach)
