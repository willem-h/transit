import React from 'react'

import RefreshableList from '../refreshable_list'

const CardList = ({ items, loading, onRefresh }) => (
  <RefreshableList items={items} loading={loading} onRefresh={onRefresh} />
)

export default CardList
