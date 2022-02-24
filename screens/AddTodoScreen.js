import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextInput, View, Alert } from 'react-native'
import styled from 'styled-components'
import shortid from 'shortid'
import { fetchTodos, addFetchTodo } from '../store/todoSlice'

export default function AddTodoScreen({ navigation }) {
  const [inputValue, setInputvalue] = React.useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  const pressHandler = () => {
    const todoItem = {
      id: shortid.generate(),
      title: inputValue,
    }

    if (inputValue) {
      dispatch(addFetchTodo(todoItem))
      setInputvalue('')
      Alert.alert('Успешно', 'Заметка добавлена', [
        {
          text: 'Перейти к списку',
          onPress: () => {
            navigation.navigate('allTodos')
          },
        },
        {
          text: 'Закрыть',
        },
      ])
    } else {
      Alert.alert('Поле ввода не может быть пустым')
    }
  }

  return (
    <Wrapper>
      <Form>
        <Input
          value={inputValue}
          onChangeText={(text) => setInputvalue(text)}
          placeholder='Введите задачу'
          autoCorrect={false}
        />
      </Form>
      <Buttons>
        <Button title='Добавить' onPress={pressHandler} color='#f4511e' />
        <Button
          title='Все заметки'
          color='#f4511e'
          onPress={() => navigation.navigate('allTodos')}
        />
      </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Form = styled(View)`
  width: 80%;
  margin-top: 20px;
  padding: 0px 20px;
`

const Input = styled(TextInput)`
  width: 100%;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 5px 5px 15px;
  margin-bottom: 15px;
`

const Buttons = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
`
