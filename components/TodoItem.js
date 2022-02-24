import { TouchableOpacity, Text, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import { deleteFetchTodo } from '../store/todoSlice'

export default function TodoItem({ id, title }) {
  const dispatch = useDispatch()

  const removeHandler = () => {
    Alert.alert(
      'Удалить',
      'Вы уверены, что хотите удалить заметку?',
      [
        { text: 'Отмена' },
        {
          text: 'Да',
          onPress: () => {
            dispatch(deleteFetchTodo(id))
          },
        },
      ],
      { cancelable: false }
    )
  }

  return (
    <TouchableContainer>
      <TextTodo>{title}</TextTodo>
      <TouchableOpacity onPress={removeHandler}>
        <AntDesign name='delete' size={24} color='black' />
      </TouchableOpacity>
    </TouchableContainer>
  )
}

const TouchableContainer = styled(TouchableOpacity)`
  border: 1px solid black;
  border-radius: 5px;
  background-color: #fafafa;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  width: 70%;
  margin: 10px 15% 10px 15%;
`

const TextTodo = styled(Text)`
  color: black;
  font-size: 18px;
`
