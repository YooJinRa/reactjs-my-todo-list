import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Todo from '../todo/Todo';

const List = () => {
  const { todos } = useSelector(
    state => (state.todos)
  )
  return(
    <div>
      <ListTitle>Working To-dos</ListTitle>
      {todos.map((todo) => (
        todo.isDone === false &&
          <Todo todo={todo} key={todo.id} />
      ))}
      <ListTitle>Done To-dos</ListTitle>
      {todos.map((todo) => (
        todo.isDone === true &&
          <Todo todo={todo} key={todo.id} />
      ))}
    </div>
      
  )
}

const ListTitle = styled.h2`
  font-family: 'Ibarra Real Nova', serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`

export default List;