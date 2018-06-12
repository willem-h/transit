import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  fetchAllStart: null,
  fetchAllComplete: ['cards']
})

export { Types }
export default Creators
