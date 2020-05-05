import styled, { css } from "styled-components";

export default styled.div`
  background-color: #ffffff;
  border: solid 1px #dedede;
  border-radius: 10px;
  margin: 0 0.5rem 1rem;

  & a {
    border-radius: inherit;
    text-decoration: none;
    color: #4a4a4a;

    width: 230px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 1.5rem;

    cursor: default;
    transition: 200ms;
  }
  & a:hover {
    background-color: #fff99e;
  }
  & a > img {
    width: 115px;
    height: 115px;
    margin: 1rem;
  }
  & div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    font-size: 16px;
  }
  & div img {
    cursor: pointer;
    ${(props) =>
      props.caught
        ? css`
            filter: grayscale(0%);
          `
        : css`
            filter: grayscale(100%);
          `}
    transition: 200ms;
  }
  & div img:hover {
    filter: grayscale(0%);
    ${(props) =>
      props.caught
        ? css``
        : css`
            transform: scale(1.2);
          `}
  }
`;
