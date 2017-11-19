import React from 'react'

import GoCard from '../../../providers/go_card'
import RefreshableList from '../refreshable_list'
import styles from './styles'

const CardList = ({ loading, onRefresh }) => (
  <RefreshableList
    items={items}
    loading={loading}
    onRefresh={onRefresh}
    style={styles}
  />
)

const items = [
  <GoCard balance={'$10.50'} key='0' />
]

export default CardList
