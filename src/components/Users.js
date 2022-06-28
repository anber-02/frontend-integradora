import React from 'react'
import { Text, FlatList, RefreshControl } from 'react-native'
// import Layout from "./Layout";
import RespositoryUser from './RepositoryUser'

export default function UsersList (props) {
  return (
    <FlatList
      data={props.users}
      ItemSeparatorComponent={() => <Text> </Text>}
      keyExtractor={item => item.idperro + ''}
      renderItem={({ item }) => (
        <RespositoryUser {...item} />
      )}
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          colors={['#78e08f']}
          progressBackgroundColor='#70F'
          onRefresh={() => props.onRefresh()}
        />
      }
    />
  )
}
// keyExtractor={(item) => new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
