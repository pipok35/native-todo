import { FlatList, View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import TodoItem from '../components/TodoItem'

export default function AllTodosScreen() {
  const todos = useSelector((state) => state.todos.todos)
  const status = useSelector((state) => state.todos.status)

  const renderItem = ({ item }) => {
    return <TodoItem title={item.title} id={item.id} />
  }

  if (!todos.length) {
    if (status === 'loading') {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            loop={true}
            autoPlay={true}
            source={require('../assets/animations/lf30_editor_ic3kolhr.json')}
          />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, padding: 15 }}>
        <Text style={{ fontSize: 22, textAlign: 'center' }}>
          Заметок пока нет
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}
