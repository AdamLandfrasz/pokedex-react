import React from "react";
import styled from "styled-components";

const MessageDiv = styled.div`
  text-align: center;
  background: #fff3cd;
  border: 1px solid #ffeeba;
  border-radius: 0.25rem;
  color: #856404;
  width: 350px;
  padding: 0.6rem 0;
  margin-bottom: 1.2rem;
`;

function FormMessage({ message }) {
  return <MessageDiv>{message}</MessageDiv>;
}

export default FormMessage;
