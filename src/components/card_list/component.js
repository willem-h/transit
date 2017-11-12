import React from 'react'

import GoCard from '../../providers/go_card'
import RefreshableList from '../refreshable_list'
import styles from './styles'

const CardList = () => (
  <RefreshableList
    items={items}
    style={styles}
  />
)

const items = [
  <GoCard balance={'$10.50'} />
]


export default CardList
