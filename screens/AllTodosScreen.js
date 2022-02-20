import { FlatList } from 'react-native'
import React, { } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from '../components/TodoItem'

export default function AllTodosScreen() {
  const dispatch = useDispatch()

  const todos = useSelector(state => state.todos.todos)

  const renderItem = ({ item }) => {
    return <TodoItem title={item.title} id={item.id} />
  }

  return <FlatList data={todos} renderItem={renderItem} keyExtractor={item => item.id} />
}