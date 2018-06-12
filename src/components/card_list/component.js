import React from 'react'

import GoCard from '../../../providers/go_card/component'
import RefreshableList from '../refreshable_list'

const CardList = ({ items, loading, onRefresh }) => (
  <RefreshableList items={items} loading={loading} onRefresh={onRefresh} />
)

export default CardList
