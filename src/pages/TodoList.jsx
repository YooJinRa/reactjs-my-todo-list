import React from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Form from '../components/form/Form';
import List from '../components/list/List';
import LogoImage from '../images/logo.png';

const TodoList = () => {
  return(
    <div>
      <p style={{textAlign:'center', margin:'20px 0'}}>
					<img src={LogoImage} alt="로고" style={{width:'100px', height:'100px'}} />
			</p>
      <Layout>
        <Header />
        <Form />
        <List />
      </Layout>
    </div>
    
  );
}

export default TodoList;