export const commonTheme = {
  html: {
    background: "#FFFFFF",
  },
  fonts: {
    inter: "Inter",
  },
  fontSize: "16px",
  media: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px'
  },
};

export const darkTheme = {
  name: 'dark',
  PRIMARY_BACKGROUND_COLOR: "#3a3842",
  SECONDARY_BACKGROUND_COLOR: "#3f3d48",
  BUTTON_BOX_SHADOW: `6px 6px 15px 3px rgba(48, 46, 54, 1),1px 1px 5px 1px rgba(48, 46, 54, 0.8),
          -6px -6px 15px 3px rgba(56, 53, 65, 0.8),
          -1px -1px 2px 1px rgba(77, 71, 100, 0.6)`,
  BUTTON_BOX_SHADOW_HOVER: `6px 6px 15px 3px rgba(48, 46, 54, 1),1px 1px 5px 1px rgba(48, 46, 54, 1),
          -6px -6px 15px 3px rgba(56, 53, 65, 1),
          -1px -1px 2px 1px rgba(77, 71, 100, 1)`,
  BUTTON_BOX_SHADOW_FOCUS: `inset 5px 5px 8px 1px rgba(0, 0, 0, 0.2),6px 6px 15px 3px rgba(48, 46, 54, 1),
          inset -5px -5px 8px 0px rgba(77, 71, 100, 0.3),
          inset -1px -2px 2px 0px rgba(104, 97, 133, 0.4),
          -6px -6px 15px 3px rgba(77, 71, 100, 0.6)`,
  FONT_COLOR: `rgba(255, 255, 255, .5)`,
  FONT_COLOR_HOVER: `rgba(255, 255, 255, 1)`,
}

export const lightTheme = {
  name: 'light',
  PRIMARY_BACKGROUND_COLOR: "#efeeee",
  SECONDARY_BACKGROUND_COLOR: "#e5e5e5",
  BUTTON_BOX_SHADOW: `4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)`,
  BUTTON_BOX_SHADOW_HOVER: `4px 4px 10px 0 rgba(0,0,0,.1), -4px -4px 10px rgba(255,255,255,1)`,
  BUTTON_BOX_SHADOW_FOCUS: `4px 4px 10px 0 rgba(0,0,0,.1), 
          -4px -4px 10px rgba(255,255,255,1), 
          4px 4px 10px 0 rgba(0,0,0,.1) inset, 
          -4px -4px 10px rgba(255,255,255,1) inset`,
  FONT_COLOR: `rgba(105, 105, 105, .5)`,
  FONT_COLOR_HOVER: `rgba(105, 105, 105, 1)`,
}
