import styled from "styled-components";
import React from "react";
import {commonTheme} from "../styles/theme";

const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  pointer-events: none;
`;
const Text = styled.span`
  font-family: ${commonTheme.fonts.inter};
  font-weight: 700;
  font-size: 200px;
  color: #EEEEEE;

  @media (max-width: ${commonTheme.media.sm}) {
    font-size: 150px;
  }
  @media (max-width: ${commonTheme.media.xs}) {
    font-size: 120px;
  }
`;

function NotFound() {
  return (
    <Wrapper>
      <Text>
        404
      </Text>
    </Wrapper>
  );
}

export default NotFound;
