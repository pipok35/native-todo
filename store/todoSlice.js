import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function () {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    )
    return response.data
  }
)

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: Date.now().toString(),
        title: action.payload.inputValue,
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      ;(state.status = 'loading'), (state.error = null)
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.todos = action.payload
    },
    [fetchTodos.rejected]: (state, action) => {},
  },
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
