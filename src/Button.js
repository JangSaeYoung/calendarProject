

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  text-align: center;

  /* 크기 */
  height: 33.67px;
  width: 113.18px;
  font-size:  25px;

  /* 색상 */
  background: black;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;