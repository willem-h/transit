import React from 'react'

import GoCard from '../../../providers/go_card'
import RefreshableList from '../refreshable_list'

const CardList = ({ loading, onRefresh }) => (
  <RefreshableList
    items={items}
    loading={loading}
    onRefresh={onRefresh}
  />
)

const items = [
  <GoCard balance={'$10.50'} key='0' />
]

export default CardList
