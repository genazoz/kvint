import { combineReducers } from 'redux';
import {settingsReducer} from "../features/settings/settingsSlice";
import {themeReducer} from "../features/theme/themeSlice";

export default combineReducers({
  settings: settingsReducer,
  theme: themeReducer,
});