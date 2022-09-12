import {createSlice} from '@reduxjs/toolkit'
import {lightTheme} from '../../styles/theme';
import {RootState} from "../../app/store";

type themeSliceState = {
  theme: {
    name: string,
    PRIMARY_BACKGROUND_COLOR: string,
    SECONDARY_BACKGROUND_COLOR: string,
    BUTTON_BOX_SHADOW: string,
    BUTTON_BOX_SHADOW_HOVER: string,
    BUTTON_BOX_SHADOW_FOCUS: string,
    FONT_COLOR: string,
    FONT_COLOR_HOVER: string,
  }
}

const initialState: themeSliceState = {
  theme: lightTheme
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    }
  },
})

export const themeSelector = (state: RootState) => state.theme;

export const {setTheme} = themeSlice.actions

export const themeReducer = themeSlice.reducer
