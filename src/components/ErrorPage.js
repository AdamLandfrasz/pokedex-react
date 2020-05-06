import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
`;

const Image = styled.img`
  width: 115px;
  height: 115px;
`;

const StyledDiv = styled.div`
  color: #ff3838;
  font-size: 115px;
  font-weight: bold;
  margin: 5px;
`;

const StyledText = styled.p`
  color: #6b6b6b;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

function ErrorPage() {
  return (
    <React.Fragment>
      <FlexBox>
        <StyledDiv>4</StyledDiv>
        <Image src="./logo96.png" />
        <StyledDiv>4</StyledDiv>
      </FlexBox>
      <StyledText>PAGE NOT FOUND</StyledText>
    </React.Fragment>
  );
}

export default ErrorPage;
