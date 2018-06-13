import React from 'react'

import CardList from '../../components/card_list'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.appLoaded = props.appLoaded
  }

  componentWillMount() {
    this.appLoaded()
  }

  render() {
    return <CardList />
  }
}

export default Home
