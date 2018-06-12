import { connect } from 'react-redux'

import Actions from '../../../providers/actions'
import Component from './component'
import { getCards, getLoading } from '../../selectors/provider_manager'

const mapStateToProps = state => ({
  items: getCards(state),
  loading: getLoading(state)
})

const mapDispatchToProps = dispatch => ({
  onRefresh: () => dispatch(Actions.fetchAllStart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
