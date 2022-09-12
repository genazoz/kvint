import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  min-width: 38px;
  height: 38px;
  padding: 7px;
  
  color: ${props => props.theme.FONT_COLOR};

  cursor: pointer;
  border: unset;
  box-shadow: ${props => props.theme.BUTTON_BOX_SHADOW};
  border-radius: 50%;

  transition: color 0.1s, transform 0.2s ease-out;

  &:hover {
      box-shadow: ${props => props.theme.BUTTON_BOX_SHADOW_HOVER};
  }
  &:focus {
    outline: none;
    transform: scale(0.95);
    box-shadow: ${props => props.theme.BUTTON_BOX_SHADOW_FOCUS};
  }
  &:hover, &:focus {
    color: ${props => props.theme.FONT_COLOR_HOVER};
  }
`;