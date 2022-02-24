import { TouchableOpacity, Text, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
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
    <TouchableContainer onPress={removeHandler}>
      <TextTodo>{title}</TextTodo>
    </TouchableContainer>
  )
}

const TouchableContainer = styled(TouchableOpacity)`
  border: 1px solid black;
  border-radius: 5px;
  background-color: #fafafa;
  align-items: center;
  padding: 15px;
  width: 70%;
  margin: 10px 15% 10px 15%;
`

const TextTodo = styled(Text)`
  color: black;
  font-size: 18px;
`
