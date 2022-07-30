import React from 'react';
import LayoutWrap from './styles.jsx';

const Layout = ({ children }) => {
  
  return(
    <LayoutWrap>{ children }</LayoutWrap>
  );
}

export default Layout;