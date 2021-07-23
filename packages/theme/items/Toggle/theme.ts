import { darkColors, lightColors } from "../../colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
};
