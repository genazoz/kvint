import styled from "styled-components";

import Button from "../Button";
import React, {useState} from "react";
import {CSSTransition} from "react-transition-group";

const WidgetEl = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 12px 22px;

  color: #FFFFFF;

  background: #13b053;
  border-radius: 15px;
  transform: scale(.8);
  opacity: 0;

  transition: .2s all;

  &.widget-enter {
    position: absolute;
    transform: scale(.8);
    
    opacity: 0;
  }
  &.widget-enter-active {
    position: absolute;
    transform: scale(.8);

    opacity: 0;
  }
  &.widget-enter-done {
    position: relative;
    transform: scale(1);

    opacity: 1;
  }
  &.widget-exit {
    transform: scale(.8);

    opacity: 0;
  }
  &.widget-exit-active {
    transform: scale(.8);

    opacity: 0;
  }
`
const Title = styled.span`
  margin: 0 0 2px;

  font-size: 18px;
  font-weight: 700;
`
const Text = styled.span`
  font-size: 15px;
`

interface WidgetProps {
  messages: any
}

const Widget: React.FC<WidgetProps> = ({messages}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const timeout = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const onClickButton = async () => {
    if (isLoading)
      return;

    setIsLoading(true);
    await (timeout(3000));

    setIsLoading(false);
    setIsLoaded(true);
  }

  return <>
    <CSSTransition in={isLoaded} classNames={'widget'} timeout={200} unmountOnExit>
      <WidgetEl>
        <Title>
          {messages.widget.title}
        </Title>
        <Text>
          {messages.widget.text}
        </Text>
      </WidgetEl>
    </CSSTransition>
    <CSSTransition in={!isLoaded} classNames={'button'} timeout={200} unmountOnExit>
      <Button text={messages.clickOnMeButton} isLoading={isLoading} onClickButton={onClickButton}/>
    </CSSTransition>
  </>;
}

export default Widget;
