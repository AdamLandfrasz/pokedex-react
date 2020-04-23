import styled from "styled-components";

export default styled.ul`
  background: #ff3838;
  overflow: hidden;
  list-style-type: none;
  font-family: "Raleway", sans-serif;
  & a {
    display: block;
    text-decoration: none;
    font-size: 1.3rem;
    color: #fff;
    padding: 10px 20px;
    line-height: 1.95;
  }
  & a:hover {
    background-color: #ad1f1f;
  }
  & a:active {
    outline: none;
  }
  & img {
    height: 40px;
    width: 40px;
  }
`;
