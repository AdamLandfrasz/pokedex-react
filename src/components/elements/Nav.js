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
    padding: 0.6rem 0.8vw;
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
