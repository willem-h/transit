import { connect } from 'react-redux'

import Component from './component'

const mapStateToProps = state => ({
  welcome: state
})

export default connect(mapStateToProps)(Component)
