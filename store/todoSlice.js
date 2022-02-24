import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function (_, { dispatch }) {
    const response = await axios.get('http://10.0.2.2:3001/todos')
    dispatch(setTodos(response.data))
  }
)

export const deleteFetchTodo = createAsyncThunk(
  'todos/deleteTodo',
  async function (id, { dispatch }) {
    await axios.delete(`http://10.0.2.2:3001/todos/${id}`)
    dispatch(removeTodo(id))
  }
)

export const addFetchTodo = createAsyncThunk(
  'todos/deleteTodo',
  async function (obj, { dispatch }) {
    await axios.post(`http://10.0.2.2:3001/todos`, obj)
    dispatch(addTodo(obj))
  }
)

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: '',
  },
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload
    },
    addTodo(state, action) {
      state.todos.push(action.payload)
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchTodos.fulfilled]: (state) => {
      state.status = 'loading complete'
    },
  },
})

export const { addTodo, removeTodo, setTodos } = todoSlice.actions

export default todoSlice.reducer
