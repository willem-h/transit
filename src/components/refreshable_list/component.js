import React, { Component } from 'react'
import {
  ListView,
  RefreshControl,
  Text,
} from 'react-native'

export default class RefreshableList extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      refreshing: false,
    }
  }

  componentDidMount() {
    this.onNewData(this.props.items)
  }

  onNewData(data) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  onRefresh() {
    this.setState({refreshing: true})
    this.props.onRefresh()
      .then(items => {
        console.log(items)
        this.onNewData(items)
        this.setState({refreshing: false})
      })
      .catch(error => {
        console.error(error)
        this.setState({refreshing: false})
      })
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        refreshControl={
          <RefreshControl
            colors={['#4BA9F5']}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }
        renderRow={item => item}
      />
    )
  }
}
