import React from 'react'

import Card from '../../components/card'
import styles from './styles'

const GoCard = props => (
  <Card
    cardLogo={require('./images/go.png')}
    providerLogo={require('./images/translink_white.png')}
    balance={props.balance}
    style={styles}
  />
)

export default GoCard
