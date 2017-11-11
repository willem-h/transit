import { connect } from 'react-redux'

import Component from './component'

const mapStateToProps = ({ hack }) => ({
  welcome: hack
})

export default connect(mapStateToProps)(Component)
