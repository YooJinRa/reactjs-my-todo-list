import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../../redux/modules/todos';
// import { customAlphabet } from 'nanoid';
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

  // nanoid 사용해서 숫자+대문자 포함한 8자리 문자 Todo ID 지정
  //const todoId = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 8);

  // react-id-generator
  const todoId = nextId('todoId');

  const onClickAddTodo = (event) => {
    event.preventDefault();
    if(inputs.title ==='' || inputs.text ==='') {
      alert('제목 또는 내용을 입력해주세요...제발~!');
      return;
    } 
    dispatch({type: ADD_TODO, todo: {
      id: todoId, // nonoid ::: id: todoId();
      title,
      text,
      isDone: false }
    });
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