 // src/redux/modules/todos.js

 // Action Value
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

 // Action Creator
 export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
 };
 export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    todoId,
  };
 }
 export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    todoId,
  }
 }

 // Initial State
 const initialState = {
  todos: [
    {
      id: "todoId1",
      title: "Redux 공부하기",
      text: "provider, useDispatch, useSelector ...",
      isDone: false,
    },
  ],
 };

 // Reducer
 const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo], //payload
      };
    case TOGGLE_TODO:
      if(!action.todoId){
        return {
          ...state,
          todos: [...state.todos]
        };
      }
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if(todo.id !== action.todoId){
            return {
              ...todo
            }
          }
          return {
            ...todo,
            isDone: !todo.isDone
          }
        })
      }
    
    case DELETE_TODO:
      return {
        todos : state.todos.filter(todo => (
        todo.id !== action.todoId &&
          [...state.todos, action.todo]
        ))
      }

    default :
      return state;
  }
 };

 // export default reducer
 export default todos;