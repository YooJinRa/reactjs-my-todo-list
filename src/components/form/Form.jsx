import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todos';
import nextId from "react-id-generator";
import FormWrap from './styles';

const Form = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: '',
    text: ''
  });

  const { title, text } = inputs;

  const onChangeInputs = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  // react-id-generator
  const todoId = nextId('todoId');
  const onClickAddTodo = (event) => {
    event.preventDefault();
    if(inputs.title ==='' || inputs.text ==='') {
      alert('제목과 내용을 모두 입력해주세요~!');
      return;
    } 
    dispatch(
      addTodo({
        id: todoId,
        title,
        text,
        isDone: false,
      })
    );
    setInputs({
      title: '',
      text: ''
    });
  }

  return(
    <FormWrap type="submit" onSubmit={onClickAddTodo}>
      <h2>Please write your to-dos</h2>
      <div className='inputBox'>
        <label>TITLE</label>
        <input id='inputTitle' type='text' name='title' value={title} onChange={onChangeInputs} />

        <label>TEXT</label>
        <input id='inputText' type='text' name='text' value={text} onChange={onChangeInputs} />

        <button >ADD</button>
      </div>
    </FormWrap>
  );
}

export default Form;