import { connect } from 'react-redux'

import Actions from '../../actions/app'
import Component from './component'

const mapDispatchToProps = dispatch => ({
  appLoaded: () => {
    dispatch(Actions.loadComplete())
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Component)
