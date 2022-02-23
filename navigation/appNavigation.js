import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddTodoScreen from '../screens/AddTodoScreen'
import AllTodosScreen from '../screens/AllTodosScreen'

const Stack = createNativeStackNavigator()

export default function appNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='addTodo'
          component={AddTodoScreen}
          options={{
            title: 'Добавить заметку',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name='allTodos'
          component={AllTodosScreen}
          options={{
            title: 'Список заметок',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
