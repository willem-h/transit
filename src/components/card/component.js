import React from 'react'
import {
  Image,
  Text,
  View,
} from 'react-native'
import styles from './styles'

const Card = props => (
  <View
    balance={props.balance}
    number={props.number}
    style={[styles.card, props.style.card]}
  >
    <View style={styles.leftColumn}>
      <Image
        source={props.cardLogo}
        style={props.style.cardLogo}
      />
    </View>
    <View style={styles.rightColumn}>
      <Image
        source={props.providerLogo}
        style={props.style.providerLogo}
      />
      <Text style={styles.balance}>
        {props.balance}
      </Text>
    </View>
  </View>
)

export default Card
