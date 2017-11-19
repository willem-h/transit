import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  fetchAllStart: null,
  fetchAllComplete: null
})

export { Types }
export default Creators
