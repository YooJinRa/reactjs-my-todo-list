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
      const prevTodos = [...state.todos]; //깊은 복사, 얕은 복사 (메모리 이슈)
      state.todos = prevTodos.map((prev) => (prev.id === action.payload.id ? { ...prev, isDone: !prev.isDone } : prev ));      
    },
    deleteTodo: (state, action) => {
      const prevTodos = [...state.todos]; //깊은 복사, 얕은 복사 (메모리 이슈)
      state.todos = prevTodos.filter(( prev ) => ( prev.id !== action.payload.id && action.payload ));
    }
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todos.actions
export default todos.reducer