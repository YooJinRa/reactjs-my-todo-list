import styled from "styled-components";

const DetailWrap = styled.div`
  width: 100%;
  background-color: var(--main-color);
  border-radius: 10px;
  box-shadow: var(--main-shadow);
  padding: 50px;
  margin: 50px auto;

  h3 {
    width: 600px;
    font-size: 24px;
    text-align: center;
    border-bottom: 1px solid var(--line-color);
    padding: 10px;
    margin: 20px auto;
  }

  p {
    width: 600px;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    padding: 10px;
    margin: 20px auto;
  }

  i {
    font-weight: 300;
  }

`

export default DetailWrap;