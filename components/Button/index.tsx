import React, {useState} from "react";
import styled from "styled-components";

import ArrowLeftIco from '../../public/svg/pay-per-click.svg'
import {commonTheme} from "../../styles/theme";
import {StyledButton} from "../../styles/button";
import {Player} from "@lottiefiles/react-lottie-player";
import LottieAnimation from "../../public/img/animation.json";

const ButtonEl = styled(StyledButton)`
  gap: 5px;
  min-width: 115px;
  width: max-content;
  height: 38px;
  padding: 0 20px !important;

  font-family: ${commonTheme.fonts.inter};
  font-size: 13px;

  border-radius: 10px !important;

  transition: .2s all;

  &.button-enter {
    transform: scale(.8);

    opacity: 0;
  }
  &.button-enter-active {
    transform: scale(.8);

    opacity: 0;
  }
  &.button-enter-done {
    transform: scale(1);

    opacity: 1;
  }
  &.button-exit {
    transform: scale(.8);

    opacity: 0;
  }
  &.button-exit-active {
    transform: scale(.8);

    opacity: 0;
  }
`;
const Icon = styled.svg`
  width: 15px;
  height: 15px;

  fill: ${props => props.theme.FONT_COLOR};

  transition: fill .1s;

  button:hover &,
  button:focus & {
    fill: ${props => props.theme.FONT_COLOR_HOVER} !important;
  }
`
const LoadingImage = styled.div`
  width: 50px;
`

interface ButtonProps {
  text: string,
  isLoading: boolean,
  onClickButton: () => void
}

const Button: React.FC<ButtonProps> = ({text, isLoading, onClickButton}) => {
  return (
    <ButtonEl onClick={onClickButton}>
      {
        isLoading
          ? <LoadingImage as={Player} src={LottieAnimation} loop autoplay speed={1}/>
          : <>
            <Icon as={ArrowLeftIco}/>
            {text}
          </>
      }
    </ButtonEl>
  );
}

export default Button;
