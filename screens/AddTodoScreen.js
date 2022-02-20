import React, { useEffect } from 'react'
import { StyleSheet, Button, TextInput, View, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { addTodo, fetchTodos } from '../store/todoSlice'

export default function AddTodoScreen({ navigation }) {

  const [inputValue, setInputvalue] = React.useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const pressHandler = () => {
    if (inputValue) {
      dispatch(addTodo({ inputValue }))
      setInputvalue('')
      Alert.alert(
        "Успешно",
        "Заметка добавлена",
        [
          {
            text: "Перейти к списку", onPress: () => {
              navigation.navigate('allTodos')
            }
          },
          {
            text: "Закрыть"
          }
        ]
      );
    } else {
      Alert.alert('Поле ввода не может быть пустым')
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={text => setInputvalue(text)}
          placeholder='Введите задачу'
          autoCorrect={false}
        />
      </View>
      <View style={styles.buttons}>
        <Button title='Добавить' onPress={pressHandler} color='#f4511e'/>
        <Button title='Все заметки' color='#f4511e' onPress={() => navigation.navigate('allTodos')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '80%',
    marginTop: 20,
    paddingHorizontal: 20,
  },

  input: {
    width: '100%',
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 15
  },
  buttons: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});