import styled from 'styled-components';

const TodoWrap = styled.div`
  width: 100%;
  background-color: var(--main-color);
  border-radius: 10px;
  box-shadow: var(--main-shadow);
  padding: 20px 15px;
  margin: 20px auto;

  h3 {
    position: relative;
    font-size: 22px;
    border-bottom: 1px solid var(--line-color);
    padding: 10px;
  }
  h3 span {
    position: absolute;
    top: 18px;
    right: 20px;
    font-size: 16px;
    font-weight: 300;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    padding: 10px;
    margin-bottom: 20px;
  }
`

export default TodoWrap;