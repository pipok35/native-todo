import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../store/todoSlice';

export default function TodoItem({ id, title }) {
  const dispatch = useDispatch()

  return (
    <TouchableOpacity style={styles.box} onPress={() => dispatch(removeTodo({id}))}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    padding: 15,
    width: '70%',
    marginVertical: 10,
    marginHorizontal: '15%'
  },

  text: {
    fontSize: 18,
    color: 'black',
  }
});
