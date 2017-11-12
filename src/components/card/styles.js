import {
  Dimensions,
  StyleSheet,
} from 'react-native'

const screenWidth = Dimensions.get('window').width
const cardWidth = screenWidth - 20

const styles = StyleSheet.create({
  balance: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderRadius: 10,
    elevation: 2,
    height: (screenWidth - 20) / 1.6,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  leftColumn: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
  },
  rightColumn: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
  }
})

export default styles
