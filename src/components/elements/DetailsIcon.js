import styled, { css } from "styled-components";

export default styled.img`
  cursor: pointer;
  margin: "0 2rem";
  transition: 200ms;
  ${(props) =>
    props.caught
      ? css`
          filter: grayscale(0%);
        `
      : css`
          filter: grayscale(100%);
        `}
  &:hover {
    filter: grayscale(0%);
    ${(props) =>
      props.caught
        ? css``
        : css`
            transform: scale(1.2);
          `}
  }
`;
