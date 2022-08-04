 // src/redux/modules/todos.js
import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = {
  todos: [
    {
      id: "todoId1",
      title: "Redux 공부하기",
      text: "provider, useDispatch, useSelector ...",
      isDone: false,
    },
  ],
}
// Reducer
export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: ( state, action ) => { state.todos.push(action.payload) },
    toggleTodo: ( state, action ) => {
      state.todos = state.todos.map((todo) => (todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo ));      
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(( todo ) => ( todo.id !== action.payload && action.payload ));
    }
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todos.actions
export default todos.reducer