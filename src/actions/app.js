import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  loadComplete: null
})

export { Types }
export default Creators
