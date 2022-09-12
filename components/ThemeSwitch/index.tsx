import React, {FC} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import {darkTheme, lightTheme} from '../../styles/theme';
import {setTheme, themeSelector} from '../../features/theme/themeSlice';
import MoonIco from '../../public/svg/moon.svg'
import SunIco from '../../public/svg/sun.svg'
import {StyledButton} from "../../styles/button";

const themes = [
  darkTheme,
  lightTheme,
]

  const Button = styled(StyledButton)`
`;
const MoonIcon = styled.svg`
  width: 18px;
  height: 18px;

  fill: #b4b4b4;
`
const SunIcon = styled.svg`
  width: 20px;
  height: 20px;
  
  stroke: rgba(77, 71, 100, 1);
`

export const ThemeSwitch: FC = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector(themeSelector);

  const onClickToggleTheme = () => {
    const currentThemeNum = themes.findIndex(x => x.name === theme.name);
    const newTheme = currentThemeNum === themes.length - 1 ? themes[0] : themes[currentThemeNum + 1]
    dispatch(setTheme(newTheme));
  }

  return <Button onClick={() => onClickToggleTheme()}>
    {theme.name === 'dark' ? (<SunIcon as={SunIco}/>) : (<MoonIcon as={MoonIco}/>)}
  </Button>
}
