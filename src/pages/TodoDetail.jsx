import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Detail from '../components/detail/Detail';
import LogoImage from '../images/logo.png';

const TodoDetail = () => {
  const location = useLocation();
  const { todos } = useSelector(
    state => (state.todos)
  )

  return(
    <div>
      <p style={{textAlign:'center', margin:'20px 0'}}>
					<img src={LogoImage} alt="로고" style={{width:'100px', height:'100px'}} />
			</p>
      <Layout>
        <Header />
        {todos.map((todo)=>(
          location.pathname.split('/')[2] === todo.id &&
          <Detail key={todo.id} todo={todo} />
        ))}
    </Layout>
    </div>
    
  );
}

export default TodoDetail;