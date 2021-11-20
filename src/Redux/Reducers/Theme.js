import { TOGGLE_THEME } from "../Actions/Theme";

const initialState = {
  darkmode:
    JSON.parse(window.localStorage.getItem("state"))?.ThemeReducer?.darkmode ||
    false,
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, darkmode: action.payload };

    default:
      return state;
  }
};

export default ThemeReducer;
