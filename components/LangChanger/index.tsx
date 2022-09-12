import React from "react";
import styled from "styled-components";

import {CSSTransition} from "react-transition-group";
import Link from "next/link";
import {useRouter} from "next/router";
import RuIco from '../../public/svg/RU.svg'
import EnIco from '../../public/svg/EN.svg'
import {StyledButton} from "../../styles/button";

const Container = styled.div`
  position: relative;

`;
const Button = styled(StyledButton)`
  width: max-content;
  height: max-content;
`
const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 10px 0 0 0;
  padding: 0;

  background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 50px;

  opacity: 0;
  transform: translateY(10px);

  transition: .3s opacity, .3s transform;

  &.menu-enter-start {
    opacity: 0;
    transform: translateY(10px);
  }

  &.menu-enter-active {
    opacity: 1;
    transform: translateY(0);
  }

  &.menu-enter-done {
    opacity: 1;
    transform: translateY(0);
  }

  &.menu-exit-start {
    opacity: 1;
    transform: translateY(0);
  }

  &.menu-exit-active {
    opacity: 0;
    transform: translateY(10px);
  }
`
const Item = styled.a<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px;

  font-weight: 600;
  font-size: 12px;
  color: #222222;

  cursor: pointer;

  ${props => props.isActive && `
    pointer-events: none;
    padding: 8px;
    
    background: ${props.theme.SECONDARY_BACKGROUND_COLOR};
  `}
`

const LangChanger: React.FC = () => {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const changeMenuOpened = (e: any) => {
    if ((!menuRef.current || !menuRef.current.contains(e.target))) {
      setIsOpenMenu(false);
    }
  }

  React.useEffect(() => {

    document.addEventListener("click", (e) => changeMenuOpened(e));

    return () => {
      document.removeEventListener("click", changeMenuOpened);
    }
  }, [isOpenMenu]);

  return (
    <Container
      onBlur={() => setIsOpenMenu(false)}
      ref={menuRef}
      tabIndex={0}>
      <Button onClick={() => setIsOpenMenu(!isOpenMenu)}>
        {router.locale === 'ru' ? <RuIco/> : <EnIco/>}
      </Button>
      <CSSTransition in={isOpenMenu} classNames={'menu'} timeout={500} unmountOnExit={true}>
        <Menu>
          <Link href={router.asPath} locale="ru">
            <Item isActive={router.locale === 'ru'}>
              <RuIco/>
            </Item>
          </Link>
          <Link href={router.asPath} locale="en">
            <Item isActive={router.locale === 'en'}>
              <EnIco/>
            </Item>
          </Link>
        </Menu>
      </CSSTransition>
    </Container>
  );
}

export default LangChanger;