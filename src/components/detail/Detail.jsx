import React from 'react';
import DetailWrap from './styles';
import { useNavigate } from 'react-router-dom';

const Detail = ({ todo }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return(
    <DetailWrap key={todo.id}>
      <i>id : {todo.id}</i>
      <h3>{todo.title}</h3>
      <p>
        <span>&#10077;</span>
        &nbsp; {todo.text} &nbsp;
        <span>&#10078;</span>
      </p>
      <button onClick={goBack}>&#8592; Go Back</button>
    </DetailWrap>
  );
}

export default React.memo(Detail);