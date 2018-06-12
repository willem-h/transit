import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  fetchComplete: ['balance', 'updatedAt']
})

export { Types }
export default Creators
