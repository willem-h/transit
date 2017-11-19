import React from 'react'
import { ScrollView, RefreshControl } from 'react-native'

export default ({ items, loading, onRefresh }) => (
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={loading}
        onRefresh={onRefresh}
      />
    }
  >
    {items}
  </ScrollView>
)
