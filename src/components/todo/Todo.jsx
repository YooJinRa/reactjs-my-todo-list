import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/modules/todos';
import { NavLink } from 'react-router-dom';
import TodoWrap from './styles';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onClickToggleHandler = () => {
    dispatch(toggleTodo(todo));
  }
  const onClickDeleteHandler = () => {
    dispatch(deleteTodo(todo));
  }
  return(
    <TodoWrap key={todo.id}>
      <h3>
        <NavLink to={`/detail/${todo.id}`}>
          {todo.title}
          <span>Detail Page &#8594;</span>
        </NavLink>
      </h3>
      <p>
        <span>&#10077;</span>
        &nbsp; {todo.text} &nbsp;
        <span>&#10078;</span>
      </p>
      <button onClick={onClickToggleHandler}>{!todo.isDone ? 'complete' : 'cancel'}</button>
      <button onClick={onClickDeleteHandler}>delete</button>
       
    </TodoWrap>
  );
}

export default React.memo(Todo);