import { StackNavigator } from 'react-navigation'

import Home from './screens/home'

const AppNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'My Cards'
      }
    }
  },
  {
    navigationOptions: {
      headerStyle: { marginTop: Expo.Constants.statusBarHeight }
    }
  }
)

export default AppNavigator
